# MyAI

MyAI is a premium AI companion for creating and chatting with custom characters. It combines Next.js, Prisma, Clerk, OpenRouter, Neon, Pinecone, and Redis to deliver a memory-aware experience.

## Features

- Custom AI characters with backstories, welcome messages, and ice breakers
- Real-time chat with model routing through OpenRouter
- Persistent memory and semantic retrieval
- Subscription management for premium features
- Responsive UI for desktop and mobile

## Tech Stack

- Frontend: Next.js, React, Tailwind CSS
- Backend: Next.js, Prisma
- Database: Neon Postgres
- Authentication: Clerk
- Payments: Stripe
- AI Integration: OpenRouter, LangChain
- Memory: Redis
- Vector Search: Pinecone

## Getting Started

1. Clone the project and open the repository folder.
2. Install the dependencies.

```bash
npm install
```

3. Create a `.env` file in the project root and add the required variables.

```env
DATABASE_URL=your-neon-postgres-connection-string
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_API_KEY=your-stripe-api-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
OPENROUTER_API_KEY=your-openrouter-api-key
OPENROUTER_API_KEY_2=optional-second-openrouter-key
OPENROUTER_CHAT_MODEL=openrouter/free
OPENROUTER_EMBEDDING_MODEL=nvidia/llama-nemotron-embed-vl-1b-v2:free
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_INDEX=your-pinecone-index
PINECONE_EMBEDDING_DIMENSION=1536
UPSTASH_REDIS_REST_URL=your-upstash-redis-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token
```

4. Run the database migrations.

```bash
npx prisma migrate dev --name init
```

5. Start the development server.

```bash
npm run dev
```

6. Open the app in your browser at the local development URL.
