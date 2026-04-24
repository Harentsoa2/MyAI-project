"use client";

import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Link from "next/link";

import { MyAiLogo } from "@/components/marketing/myai-logo";
import { useProModal } from "@/hooks/use-pro-modal";

import { Button } from "./ui/button";
import { MobileSidebar } from "./mobile-sidebar";
import { ModeToggle } from "./theme-toggle";

interface NavBarProps {
  isPro: boolean;
}

const NavBar = ({ isPro }: NavBarProps) => {
  const proModal = useProModal();

  return (
    <div className="fixed z-50 h-16 w-full rounded-b-md border-b border-primary/10 bg-secondary bg-opacity-40 shadow-md">
      <main className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <MobileSidebar isPro={isPro} />
        <Link href="/" className="mr-auto flex items-center gap-3">
          <MyAiLogo compact showTagline={false} />
          <div className="hidden leading-tight md:block">
            <p className="text-xl font-bold text-primary">MyAI</p>
            <p className="text-xs text-muted-foreground">Previously ChatNest AI</p>
          </div>
        </Link>
        <section className="max-w-80 flex items-center gap-5 p-3 text-sm">
          {isPro ? (
            <div className="group relative">
              <div className="flex items-center justify-center rounded-full bg-emerald-500/10 p-2 text-emerald-500">
                <Sparkles className="h-6 w-6 fill-current" />
              </div>
              <div className="absolute left-1/2 top-full whitespace-nowrap rounded-lg bg-emerald-400 px-3 py-1 text-xs text-white opacity-0 shadow-md transition-all group-hover:scale-100 group-hover:opacity-100">
                • Pro Member
              </div>
            </div>
          ) : (
            <Button onClick={proModal.onOpen} variant="premium" size="sm">
              Upgrade
              <Sparkles className="fill-white text-white" />
            </Button>
          )}
          <div>
            <ModeToggle />
          </div>
          <UserButton />
        </section>
      </main>
    </div>
  );
};

export default NavBar;
