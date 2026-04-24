import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BookOpen,
  CheckCircle2,
  Clock3,
  Gamepad2,
  GraduationCap,
  Headphones,
  LineChart,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import { MyAiLogo } from "./myai-logo";

const featureCards = [
  {
    icon: BrainCircuit,
    title: "Persistent memory",
    description:
      "Redis keeps the short-term thread alive while Pinecone retrieves the long-term moments that matter most.",
  },
  {
    icon: Zap,
    title: "Fast OpenRouter inference",
    description:
      "Route to capable models without changing your UI, prompt logic, or product flow.",
  },
  {
    icon: ShieldCheck,
    title: "Brand-safe experiences",
    description:
      "Define tone, guardrails, and personas once, then keep every reply on-brand across themes.",
  },
  {
    icon: LineChart,
    title: "Conversion-ready UX",
    description:
      "Landing pages, CTA sections, pricing, and FAQ blocks are designed to turn attention into sign-ups.",
  },
];

const steps = [
  {
    title: "Shape the assistant",
    description:
      "Write the persona, tone, goals, and seed memory. MyAI starts with a clear voice instead of a blank prompt.",
  },
  {
    title: "Attach memory and retrieval",
    description:
      "Chat history lands in Redis, while semantic recall goes into Pinecone so the assistant can remember by meaning.",
  },
  {
    title: "Launch the product layer",
    description:
      "Pair OpenRouter, your theme, and your brand copy into a polished experience that feels ready to sell.",
  },
];

const useCases = [
  {
    icon: Headphones,
    title: "Customer support",
    description:
      "Answer repetitive questions with context-aware responses and consistent tone.",
  },
  {
    icon: GraduationCap,
    title: "Coaching and education",
    description:
      "Personalize lessons, reminders, and guidance using memory from previous sessions.",
  },
  {
    icon: Gamepad2,
    title: "Companion and roleplay",
    description:
      "Keep characters, worlds, and arcs coherent across long conversations.",
  },
  {
    icon: BookOpen,
    title: "Creator tools",
    description:
      "Ship a branded assistant that feels like an extension of your content or product.",
  },
];

const testimonials = [
  {
    name: "Mina R.",
    role: "Indie founder",
    quote:
      "MyAI made the assistant feel polished on day one. The memory stack did the heavy lifting so we could focus on the product story.",
  },
  {
    name: "Theo S.",
    role: "Community lead",
    quote:
      "The dark and light themes both look premium, and the new logo gives the product a much stronger identity.",
  },
  {
    name: "Lina P.",
    role: "Product designer",
    quote:
      "The layout is exactly what we needed for conversion. Clear sections, strong CTA flow, and a great first impression.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "For testing the product and validating a single assistant.",
    features: ["1 assistant", "Basic memory", "Community support", "Theme toggle"],
    cta: "Start free",
    href: "/sign-up",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For creators and small teams shipping production chats.",
    features: [
      "Unlimited assistants",
      "Semantic memory",
      "Brand controls",
      "Priority email support",
    ],
    cta: "Choose Pro",
    href: "/sign-up",
    featured: true,
  },
  {
    name: "Scale",
    price: "$49",
    description: "For teams with more traffic, more personas, and more logic.",
    features: [
      "Team workspace",
      "Advanced analytics",
      "Custom retrieval rules",
      "Dedicated onboarding",
    ],
    cta: "Talk to us",
    href: "#final-cta",
    featured: false,
  },
];

const faqs = [
  {
    question: "Does MyAI support both dark and light mode?",
    answer:
      "Yes. The landing page and product shell are designed for both themes with matching violet accents and readable contrast.",
  },
  {
    question: "What powers the memory layer?",
    answer:
      "Redis stores the live conversation thread, while Pinecone stores vector embeddings so MyAI can recall semantically related context.",
  },
  {
    question: "Can I use a different model later?",
    answer:
      "Yes. The OpenRouter model is configurable through environment variables, so you can swap models without rebuilding the UI.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "The Starter tier is free in the mock pricing structure, and the code defaults to OpenRouter free models where available.",
  },
  {
    question: "Can I brand it as my own product?",
    answer:
      "Absolutely. The copy, logo concept, colors, and section flow are all designed to be easy to rebrand.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function MyAiLanding() {
  return (
    <main className="relative isolate overflow-hidden bg-white text-slate-950 transition-colors dark:bg-black dark:text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.28),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_30%)]" />
        <div className="absolute left-[12%] top-[14rem] h-56 w-56 rounded-full bg-violet-500/10 blur-3xl animate-float-slow" />
        <div className="absolute right-[8%] top-[26rem] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl animate-float-slower" />
      </div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <MyAiLogo />

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <a className="transition-colors hover:text-violet-600 dark:hover:text-violet-300" href="#features">
              Features
            </a>
            <a className="transition-colors hover:text-violet-600 dark:hover:text-violet-300" href="#how-it-works">
              How it works
            </a>
            <a className="transition-colors hover:text-violet-600 dark:hover:text-violet-300" href="#pricing">
              Pricing
            </a>
            <a className="transition-colors hover:text-violet-600 dark:hover:text-violet-300" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ModeToggle />
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              asChild
              className="bg-violet-600 text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-500"
            >
              <Link href="/sign-up">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-18 pt-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-700 dark:text-violet-300">
            <Sparkles className="h-4 w-4" />
            Previously ChatNest AI
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Build an AI companion that remembers, adapts, and converts.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            MyAI turns every conversation into a premium product experience with
            persistent memory, semantic retrieval, and a polished SaaS shell.
            Ship support bots, coaching assistants, or roleplay companions
            without rebuilding the whole stack.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-violet-600 text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-500"
            >
              <Link href="/sign-up">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black/10 dark:border-white/15">
              <Link href="#pricing">See pricing</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. Built for light and dark mode from the first
            screen.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Memory-aware", value: "Redis + Pinecone" },
              { label: "Theme-ready", value: "Dark and light" },
              { label: "Launch-ready", value: "Conversion first" },
            ].map((stat) => (
              <Card
                key={stat.label}
                className="border-black/5 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-6 h-24 w-24 rounded-full bg-violet-500/20 blur-3xl animate-float-slow" />
          <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl animate-float-slower" />

          <Card className="relative overflow-hidden border-black/5 bg-white/90 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <CardHeader className="border-b border-black/5 pb-4 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">MyAI live preview</p>
                  <CardTitle className="mt-1 text-2xl">Memory that feels instant.</CardTitle>
                </div>
                <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                  Connected
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-5 p-5">
              <div className="rounded-3xl border border-black/5 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-start gap-3">
                  <Avatar className="h-9 w-9 border border-violet-500/20">
                    <AvatarFallback className="bg-violet-500/15 text-violet-700 dark:text-violet-300">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-2xl rounded-tl-md bg-violet-600 px-4 py-3 text-sm text-white shadow-lg shadow-violet-500/20">
                    Remember my preferred tone and keep replies short.
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <Avatar className="h-9 w-9 border border-black/10 dark:border-white/10">
                    <AvatarFallback className="bg-white text-black dark:bg-zinc-900 dark:text-white">
                      M
                    </AvatarFallback>
                  </Avatar>
                  <div className="max-w-[24rem] rounded-2xl rounded-tl-md border border-black/5 bg-white px-4 py-3 text-sm shadow-sm dark:border-white/10 dark:bg-zinc-950">
                    Absolutely. I&apos;ll keep it crisp, friendly, and aligned to
                    your style from here on out.
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Tone", value: "Crisp" },
                  { label: "Memory", value: "Persistent" },
                  { label: "Retrieval", value: "Vector search" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/5 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-transparent p-4">
                <div className="flex items-start gap-3">
                  <MyAiLogo compact showTagline={false} />
                  <div>
                    <p className="text-sm font-semibold">Logo concept</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A violet orbit wrapping two chat nodes, with a spark in the
                      center to signal memory, motion, and intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mx-auto mt-6 max-w-md">
            <Card className="border-black/5 bg-white/80 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-600 dark:text-violet-300">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Design system aligned</p>
                  <p className="text-sm text-muted-foreground">
                    Same brand language works in the marketing site, app shell, and product UI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-4 text-center sm:grid-cols-3">
            {[
              "Context-rich conversations",
              "Brandable for any AI product",
              "Optimized for conversion and readability",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need for a premium AI product in one layer."
          description="MyAI combines memory, retrieval, model routing, and polished UX patterns so you can focus on the experience instead of wiring it together."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group border-black/5 bg-white/80 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-700 transition group-hover:scale-105 dark:text-violet-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="sticky top-24">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-400">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Three clean steps from blank slate to memorable assistant.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              The product flow stays intentionally simple: define the personality,
              add memory, and launch a response loop that feels alive.
            </p>

            <div className="mt-8 rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6 text-sm leading-7 text-violet-950 dark:text-violet-100">
              <div className="flex items-center gap-2 font-semibold">
                <Target className="h-4 w-4" />
                UX note
              </div>
              <p className="mt-3">
                The layout keeps the story moving: big promise, proof, steps,
                use cases, pricing, and a final CTA. Each block earns the next.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                className={cn(
                  "overflow-hidden border-black/5 bg-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5",
                  index === 1 && "border-violet-500/30 shadow-lg shadow-violet-500/5",
                )}
              >
                <CardContent className="grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-lg font-semibold text-violet-700 dark:text-violet-300">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Clock3 className="h-4 w-4" />
                      Step {index + 1}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Use cases"
          title="Built for the moments where context and consistency matter."
          description="MyAI adapts to support, coaching, community, and companion experiences while keeping the UI polished and easy to scan."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={useCase.title}
                className="border-black/5 bg-white/80 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-700 dark:text-violet-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social proof"
          title="Early feedback that reads like a product-market fit checklist."
          description="The strongest conversion pages prove value before they ask for commitment. These example quotes are framed like pilot feedback to reinforce that feeling."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-black/5 bg-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border border-violet-500/20">
                    <AvatarFallback className="bg-violet-500/15 text-sm font-semibold text-violet-700 dark:text-violet-300">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1 text-violet-500">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p className="mt-5 font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that matches the shape of the product."
          description="Start free to validate the experience, move to Pro for production usage, and scale when the assistant becomes part of the business."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative border-black/5 bg-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5",
                plan.featured && "border-violet-500/40 shadow-2xl shadow-violet-500/10",
              )}
            >
              {plan.featured ? (
                <div className="absolute right-5 top-5 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </div>
              ) : null}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {plan.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <Separator className="bg-black/5 dark:bg-white/10" />
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={cn(
                    "w-full",
                    plan.featured
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25 hover:bg-violet-500"
                      : "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
                  )}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to the questions buyers ask before they click."
          description="This section removes friction and helps users understand how MyAI handles memory, themes, and model routing."
        />

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-black/5 bg-white/80 p-6 transition hover:border-violet-500/30 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold">
                {faq.question}
                <span className="rounded-full border border-violet-500/20 bg-violet-500/10 p-2 text-violet-700 transition group-open:rotate-45 dark:text-violet-300">
                  <Sparkles className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="final-cta" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/20 bg-gradient-to-br from-black via-zinc-950 to-violet-950 px-6 py-12 text-white shadow-[0_40px_100px_rgba(88,28,135,0.32)] sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.24),transparent_30%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                Ready to launch?
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Give your AI product a premium front door.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Start with a landing page that converts, then connect the same
                brand language to the chat experience itself. MyAI gives you the
                presentation layer and the memory layer in one place.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                  <Link href="/sign-up">
                    Start free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <Link href="#features">Review features</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <MyAiLogo compact showTagline={false} />
                    <div>
                      <p className="font-semibold">Brand consistency</p>
                      <p className="text-sm text-white/70">
                        One design language across landing pages, dashboards, and chat screens.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur">
                <CardContent className="grid gap-4 p-5 sm:grid-cols-3">
                  {[
                    { label: "Setup", value: "15 min" },
                    { label: "Theme support", value: "2 modes" },
                    { label: "Conversion goal", value: "More sign-ups" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                      <p className="mt-2 text-lg font-semibold">{item.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white/70 dark:border-white/10 dark:bg-black/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="space-y-4">
            <MyAiLogo />
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              MyAI is a premium AI companion concept focused on memory, clarity,
              and conversion. Built to feel elegant in both dark and light mode.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Product", links: ["Features", "Pricing", "FAQ"] },
              { title: "Company", links: ["About", "Contact", "Careers"] },
              { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
            ].map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold">{group.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {group.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-t border-black/5 px-4 py-5 text-xs text-muted-foreground dark:border-white/10 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} MyAI. All rights reserved.</p>
          <p>Designed for launch clarity, premium spacing, and a violet-forward brand.</p>
        </div>
      </footer>
    </main>
  );
}
