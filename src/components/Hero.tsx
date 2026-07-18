"use client";

import { motion } from "framer-motion";
import { Mail, Sun, Moon, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { MapPin } from "@/components/Icons";
import { heroData } from "@/data/hero";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Doto } from "next/font/google";

const doto = Doto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const icons: Record<string, React.ElementType> = {
  Mail,
  Github: FaGithub,
  Linkedin: FaLinkedin,
  LeetCode: SiLeetcode,
  Codeforces: SiCodeforces,
};

function useTimer() {
  const [elapsed, setElapsed] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setElapsed({ h: now.getHours(), m: now.getMinutes(), s: now.getSeconds() });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(elapsed.h)}:${pad(elapsed.m)}:${pad(elapsed.s)}`;
}

function useDarkMode() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

export default function Hero({ onOpenCommand }: { onOpenCommand?: () => void }) {
  const time = useTimer();
  const { dark, toggle } = useDarkMode();

  return (
    <>
      {/* BANNER */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto overflow-hidden bg-white dark:bg-black shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)]">
        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Timer overlay — bottom right of banner */}
        <div className="absolute bottom-3 right-4 z-10 pointer-events-auto">
          <div className={`${doto.className} text-[15px] sm:text-[18px] tracking-[0.15em] text-zinc-300 dark:text-zinc-400 font-bold opacity-80`}>
            {time}
          </div>
        </div>
      </div>

      {/* PROFILE ROW */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative p-[3px] rounded-[6px] sm:rounded-[8px] border-[1.5px] border-black/30 dark:border-white/[0.15] shrink-0 bg-white dark:bg-black">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[3px] sm:rounded-[5px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image src="/avatar.png" alt="Meghna Nair" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center pt-8">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-none mb-1">
                {heroData.name}
              </h1>
              <div className="flex items-center gap-1.5 text-[13px] sm:text-[14px] text-zinc-500 dark:text-zinc-400">
                <MapPin className="h-3.5 w-3.5" />
                <span>India · Remote</span>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-end h-20 sm:h-24 py-1">
            <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-0">
              <button
                onClick={onOpenCommand}
                className="relative flex items-center gap-1.5 px-3 py-1 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[5px] text-[11px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80 font-mono"
                title="Open command palette (⌘K)"
              >
                <span className="leading-none mt-[0.5px]">⌘</span>
                <span className="leading-none mt-[0.5px]">K</span>
              </button>
              <button
                onClick={toggle}
                className="relative flex items-center justify-center p-1 sm:p-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all duration-300 active:scale-95"
                title="Toggle theme"
              >
                {dark ? <Sun className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /> : <Moon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BIO AND SOCIALS */}
      <div id="hero" className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-0 px-4 flex flex-col z-10 relative scroll-mt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-4"
        >
          <motion.p variants={fadeInUp} className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed font-semibold">
            {heroData.role}
          </motion.p>
          
          <motion.ul variants={fadeInUp} className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 space-y-1.5 pl-2">
            {heroData.bioParagraphs.map((para, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-zinc-400 dark:text-zinc-500 mt-[2px] text-[14px] leading-none">•</span>
                <span>{para}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2 mt-6">
            <a href="#projects" className="group relative block rounded-[4px] text-center text-[13px] font-medium tracking-tight transition-[transform] duration-200 active:scale-[0.99] text-neutral-50 dark:text-neutral-950 px-3 py-1.5 !text-[12px] bg-[#18181b] hover:bg-[#27272a] dark:bg-white dark:hover:bg-neutral-100 border border-black/10 dark:border-white/10">
              <span className="flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5" /> View my work
              </span>
            </a>
            <a href="mailto:meghnaofficial66@gmail.com" className="group relative block rounded-[4px] text-center text-[13px] font-medium tracking-tight transition-[transform] duration-200 active:scale-[0.99] text-neutral-900 dark:text-neutral-300 px-3 py-1.5 !text-[12px] bg-white/90 dark:bg-[#0c0c0e] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10">
              <span className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Mail className="w-3.5 h-3.5" /> Send an email
              </span>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 mb-6">
            <h2 className="text-[14px] text-zinc-500 mb-3">
              Here are my <span className="font-medium text-zinc-800 dark:text-zinc-200">socials</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {heroData.socials.map((social) => {
                const Icon = icons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="group relative block rounded-[4px] text-center text-[13px] font-medium tracking-tight transition-[transform] duration-200 active:scale-[0.99] text-neutral-900 dark:text-neutral-300 px-3 py-1.5 !text-[12px] bg-white/90 dark:bg-[#0c0c0e] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10"
                  >
                    <span className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {Icon && <Icon className="w-3.5 h-3.5" />} {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
          
          {/* Subtle separator */}
          <div className="w-auto border-t border-dashed border-black/10 dark:border-white/10 my-8 -mx-2 md:-mx-14" />
        </motion.div>
      </div>
    </>
  );
}
