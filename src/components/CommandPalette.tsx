"use client";

import { useState, useEffect, useCallback } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { navLinks } from "@/data/nav";
import { projectsData } from "@/data/projects";

interface CommandPaletteProps {
  onRegister?: (open: () => void) => void;
}

export default function CommandPalette({ onRegister }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);

  const openPalette = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (onRegister) onRegister(openPalette);
  }, [onRegister, openPalette]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/80 text-zinc-400 backdrop-blur-md transition-colors hover:bg-zinc-800 hover:text-white md:bottom-8 md:right-8"
        aria-label="Open command palette"
      >
        <Search className="h-5 w-5" />
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
      >
        <div className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4 sm:p-0">
          <div className="flex h-[400px] flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex items-center border-b border-white/10 px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 text-zinc-500" />
              <Command.Input
                placeholder="Type a command or search..."
                className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500"
              />
            </div>
            <Command.List className="max-h-[350px] overflow-y-auto overflow-x-hidden px-2 py-3">
              <Command.Empty className="py-6 text-center text-sm text-zinc-500">
                No results found.
              </Command.Empty>

              <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-zinc-500">
                {navLinks.map((link) => (
                  <Command.Item
                    key={link.href}
                    onSelect={() => {
                      runCommand(() => {
                        window.location.hash = link.href;
                      });
                    }}
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm text-zinc-200 outline-none aria-selected:bg-white/10 aria-selected:text-white mt-1"
                  >
                    Go to {link.label}
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Separator className="my-2 h-px bg-white/10" />

              <Command.Group heading="Projects" className="px-2 py-1.5 text-xs font-medium text-zinc-500">
                {projectsData.slice(0, 5).map((project) => (
                  <Command.Item
                    key={project.title}
                    onSelect={() => {
                      runCommand(() => {
                        const link = project.links.find((l) => l.type === "demo" || l.type === "github");
                        if (link) window.open(link.href, "_blank");
                      });
                    }}
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm text-zinc-200 outline-none aria-selected:bg-white/10 aria-selected:text-white mt-1"
                  >
                    {project.title} <span className="ml-2 text-xs text-zinc-500">{project.status}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </div>
        </div>
      </Command.Dialog>
    </>
  );
}
