"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Sun, Command as CommandIcon } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/Icons";
import { heroData } from "@/data/hero";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const icons: Record<string, React.ElementType> = {
  Mail,
  Github,
  Linkedin,
  Twitter,
};

export default function Hero() {
  return (
    <section id="hero" className="border-b border-dashed border-white/10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col"
      >
        {/* Top Banner - Full Bleed */}
        <motion.div variants={fadeInUp} className="w-full h-48 sm:h-56 overflow-hidden">
          <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
            <video 
              src="/banner.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </motion.div>

        {/* Content Wrapper aligned to grid (e.g., 40px padding = p-10) */}
        <div className="px-10 pb-10">
          {/* Header section: Avatar, Name, Age, Actions */}
          <div className="flex items-start justify-between relative -mt-12 mb-8">
            <motion.div variants={fadeInUp} className="flex items-end gap-6">
              <div className="w-24 h-24 rounded-xl bg-black border border-white/10 overflow-hidden shrink-0">
                 <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="mb-2">
                <h1 className="text-[22px] font-bold tracking-tight text-white leading-tight">
                  {heroData.name}
                </h1>
                <p className="text-zinc-500 text-sm mt-0.5">{heroData.age}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-3 mt-14">
              <button className="flex items-center gap-2 rounded-md border border-white/5 bg-zinc-900/50 px-2.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                <CommandIcon className="h-3.5 w-3.5" /> K
              </button>
              <button className="flex items-center justify-center rounded-md border border-white/5 bg-zinc-900/50 p-2 text-zinc-400 hover:text-white transition-colors">
                <Sun className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Bio & Bullets */}
          <motion.div variants={fadeInUp} className="mb-8">
            <p className="text-[14px] text-zinc-300 mb-5 font-medium leading-relaxed max-w-[600px]">
              {heroData.role}
            </p>
            <ul className="space-y-2.5 text-[13px] text-zinc-400 max-w-[600px]">
              {heroData.bioBullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-zinc-600 mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
            <button className="flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-[13px] font-medium text-black transition-colors hover:bg-white">
              <Calendar className="h-3.5 w-3.5" />
              <span>Book an intro call</span>
            </button>
            <button className="flex items-center gap-2 rounded-md bg-zinc-900/80 border border-white/5 px-4 py-2 text-[13px] font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white">
              <Mail className="h-3.5 w-3.5" />
              <span>Send an email</span>
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeInUp}>
            <p className="text-[13px] text-zinc-500 mb-4">
              Here are my <span className="font-semibold text-zinc-300">socials</span>
            </p>
            <div className="flex flex-wrap gap-2.5">
              {heroData.socials.map((social) => {
                const Icon = icons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-white/5 bg-zinc-900/50 px-3 py-1.5 text-[12px] font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                  >
                    {Icon && <Icon className="h-3 w-3" />}
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
