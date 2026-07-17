"use client";

import { useCallback, useRef } from "react";
import IndexSidebar from "@/components/IndexSidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  const openCommandRef = useRef<(() => void) | null>(null);

  const handleRegister = useCallback((openFn: () => void) => {
    openCommandRef.current = openFn;
  }, []);

  const handleOpenCommand = useCallback(() => {
    openCommandRef.current?.();
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Sticky Sidebar (lg:block) */}
      <div className="fixed inset-0 z-50 pointer-events-none hidden lg:block" style={{ width: "calc(100vw - var(--removed-body-scroll-bar-size, 0px))" }}>
        <div className="absolute top-[22vh] left-[calc(69%+32px)] pointer-events-auto">
          <IndexSidebar />
        </div>
      </div>

      {/* Vertical Lines */}
      {/* Left line at 30% */}
      <div className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)", WebkitMaskImage: "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)" }}></div>
      {/* Right line at 30% from right */}
      <div className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)", WebkitMaskImage: "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)" }}></div>

      {/* Horizontal Lines */}
      {/* Top horizontal at 22vh */}
      <div className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)", WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)" }}></div>
      {/* Bottom horizontal at 22vh + 112px */}
      <div className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)", WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)" }}></div>

      {/* Plus/Crosshairs at intersections */}
      <div className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block" style={{ top: "22vh", left: "30%", transform: "translate(-50%, -50%)" }}></div>
      <div className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block" style={{ top: "22vh", right: "30%", transform: "translate(50%, -50%)" }}></div>
      <div className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block" style={{ top: "calc(22vh + 112px)", left: "30%", transform: "translate(-50%, -50%)" }}></div>
      <div className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block" style={{ top: "calc(22vh + 112px)", right: "30%", transform: "translate(50%, -50%)" }}></div>

      {/* HERO (Banner + Avatar Row + Bio + Socials) */}
      <Hero onOpenCommand={handleOpenCommand} />

      {/* MAIN CONTENT */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pb-0 px-4 flex flex-col z-10 relative">
        <Projects />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </div>
      
      <CommandPalette onRegister={handleRegister} />
    </div>
  );
}
