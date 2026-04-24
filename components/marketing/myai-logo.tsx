"use client";

import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

interface MyAiLogoProps {
  className?: string;
  compact?: boolean;
  showTagline?: boolean;
}

export function MyAiLogo({
  className,
  compact = false,
  showTagline = true,
}: MyAiLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative grid shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-black p-[1px] shadow-[0_24px_60px_rgba(139,92,246,0.32)]",
          compact ? "size-10" : "size-12",
        )}
      >
        <div className="relative grid size-full place-items-center rounded-[15px] bg-white/95 text-black dark:bg-zinc-950/95 dark:text-white">
          <span className="absolute left-[18%] top-[18%] h-3 w-3 rounded-full border border-violet-500/45 bg-violet-500/15" />
          <span className="absolute bottom-[18%] right-[18%] h-3 w-3 rounded-full border border-violet-500/45 bg-violet-500/15" />
          <Sparkles
            className={cn(
              "text-violet-600 dark:text-violet-400",
              compact ? "h-4 w-4" : "h-5 w-5",
            )}
          />
        </div>
      </div>

      {showTagline ? (
        <div className="leading-tight">
          <p className={cn("font-semibold tracking-tight", compact ? "text-base" : "text-lg")}>
            MyAI
          </p>
          <p className="text-xs text-muted-foreground">Premium AI companion</p>
        </div>
      ) : null}
    </div>
  );
}
