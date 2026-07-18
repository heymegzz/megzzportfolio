"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import SectionDivider from "@/components/SectionDivider";

export default function Skills() {
  // Preload all icon images eagerly on mount so they're cached
  // before the user scrolls down — prevents mid-scroll repaints.
  useEffect(() => {
    skillsData.forEach(({ icon }) => {
      if (!icon) return;
      const img = new Image();
      img.src = `https://cdn.simpleicons.org/${icon}/white`;
    });
  }, []);

  return (
    <section id="skills" className="py-12 md:py-16 scroll-mt-24 relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-6 flex items-end justify-between">
          <h2 className="text-[17px] sm:text-[20px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-none">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Render grid without whileInView to avoid IO callbacks during scroll */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex items-center justify-center gap-2 px-3 py-1.5 sm:px-3 sm:py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[12px] sm:text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80 cursor-default"
            >
              {skill.icon && (
                <div className="flex-shrink-0 h-3.5 w-3.5 sm:h-4 sm:w-4 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${skill.icon}/white`}
                    alt={skill.name}
                    className="object-contain w-full h-full opacity-60 group-hover:opacity-100 dark:invert-0 invert transition-opacity duration-300"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              )}
              <span className="leading-none mt-[1px]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      <SectionDivider />
    </section>
  );
}
