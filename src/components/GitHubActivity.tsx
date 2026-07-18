"use client";

import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";

export default function GitHubActivity() {
  return (
    <div className="py-8 w-full overflow-hidden">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-[17px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          GitHub Activity
        </h2>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/heymegzz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 text-[12px] text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            <span>@heymegzz</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-max p-4 rounded-xl border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950">
          <GitHubCalendar
            username="heymegzz"
            blockSize={11}
            blockMargin={3}
            fontSize={12}
            theme={{
              light: ['#f0f0f0', '#d4d4d4', '#a3a3a3', '#737373', '#3f3f3f'],
              dark: ['#1a1a1a', '#2d2d2d', '#4a4a4a', '#737373', '#d4d4d4'],
            }}
            style={{
              color: 'var(--foreground)',
              margin: 'auto'
            }}
          />
        </div>
      </div>
    </div>
  );
}
