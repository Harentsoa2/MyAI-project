import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { generateText, LangChainAdapter } from "ai";
import { createOpenAI as createOpenRouter } from "@ai-sdk/openai";

import { MemoryManager } from "@/lib/memory";
import { rateLimit } from "@/lib/rate-limit";
import prismadb from "@/lib/prismaDB";

export async function POST(
  request: Request,
  props: { params: Promise<{ chatId: string }> },
) {
  const params = await props.params;

  try {
    const { prompt } = await request.json();
    const user = await currentUser();

    if (!user || !user.firstName || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const identifier = request.url + "-" + user.id;
    const { success } = await rateLimit(identifier);

    if (!success) {
      return new NextResponse("Rate limit exceeded", { status: 429 });
    }

    const character = await prismadb.character.update({
      where: {
        id: params.chatId,
      },
      data: {
        messages: {
          create: {
            content: prompt,
            role: "user",
            userId: user.id,
          },
        },
      },
    });

    if (!character) {
      return new NextResponse("Character not found", { status: 404 });
    }

    const characterKey = {
      characterName: character.name,
      modelName: "llama-3.3-70b-versatile",
      userId: user.id,
    };

    const memoryManager = await MemoryManager.getInstance();

    const records = await memoryManager.readLatestHistory(characterKey);
    if (records.length === 0) {
      await memoryManager.seedChatHistory(character.seed, "\n\n", characterKey);
    }

    await memoryManager.writeToHistory("User: " + prompt + "\n", characterKey);

    const recentChatHistory =
      await memoryManager.readLatestHistory(characterKey);

    const similarDocs = await memoryManager.vectorSearch(
      recentChatHistory,
      character.name,
    );

    let relevantHistory = "";
    if (!!similarDocs && similarDocs.length !== 0) {
      relevantHistory = similarDocs.map((doc) => doc.pageContent).join("\n");
      console.log(similarDocs);
      console.log(relevantHistory);
    }

    const openRouterApiKey =
      process.env.OPENROUTER_API_KEY ?? process.env.OPENROUTER_API_KEY_2;
    if (!openRouterApiKey) {
      return new NextResponse(
        "Missing OPENROUTER_API_KEY or OPENROUTER_API_KEY_2",
        { status: 500 },
      );
    }

    const openrouter = createOpenRouter({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: openRouterApiKey,
      headers: {
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
        "X-Title": "My AI Character App",
      },
    });

    const chatModelCandidates = [
      process.env.OPENROUTER_CHAT_MODEL ?? "openrouter/free",
      "openai/gpt-oss-20b:free",
    ];

    let text = "";
    let lastChatError: unknown = null;

    for (const modelId of chatModelCandidates) {
      try {
        const result = await generateText({
          model: openrouter(modelId),
          prompt: `
                ONLY generate plain sentences without prefix of who is speaking. DO NOT use ${character.name}: prefix.
                DO NOT take line breaks/gaps in the response.
                Avoid overly long or short answers. DONT USE more than 150 words.
                Short answers are prefered mostly.

                ${character.instructions}
                    
                Below are relevant details about ${character.name}'s past and the conversation you are in.
                ${relevantHistory}
                
                ${character.welcomeMessage}
                ${recentChatHistory}\n${character.name};
            `,
        });

        text = result.text;
        break;
      } catch (error) {
        lastChatError = error;
        const statusCode =
          typeof error === "object" && error !== null && "statusCode" in error
            ? (error as { statusCode?: number }).statusCode
            : undefined;

        if (statusCode !== 429) {
          throw error;
        }

        console.log(`[OPENROUTER] ${modelId} rate-limited, trying next free model`);
      }
    }

    if (!text) {
      console.log("[OPENROUTER] All free chat models failed", lastChatError);
      return new NextResponse(
        "OpenRouter free models are rate-limited right now. Please retry shortly.",
        { status: 503 },
      );
    }

    const fullResponse = text.trim();

    if (fullResponse && fullResponse.length > 1) {
      await memoryManager.writeToHistory(fullResponse, characterKey);

      await prismadb.character.update({
        where: {
          id: params.chatId,
        },
        data: {
          messages: {
            create: {
              content: fullResponse,
              role: "system",
              userId: user.id,
            },
          },
        },
      });

      const webStream = new ReadableStream({
        start(controller) {
          controller.enqueue(fullResponse);
          controller.close();
        },
      });

      return LangChainAdapter.toDataStreamResponse(webStream);
    }

    return new Response("L'IA n'a pas pu générer de réponse.", {
      status: 500,
    });
  } catch (error) {
    console.log("[CHAT_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
