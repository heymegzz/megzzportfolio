"use client";

import { motion } from "framer-motion";
import { skillsData, totalSkillCount } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-10 scroll-mt-24 border-b border-dashed border-white/10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-6 flex items-end justify-between">
          <h2 className="text-[17px] font-bold text-white tracking-tight">
            Skills
          </h2>
          <span className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
            {totalSkillCount} total
          </span>
        </motion.div>

        <div className="space-y-12">
          {skillsData.map((group) => (
            <motion.div key={group.category} variants={fadeInUp}>
              <h3 className="text-sm font-medium text-zinc-400 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-colors hover:border-white/20 hover:bg-white/10 group cursor-default"
                  >
                    {skill.icon && (
                      <div className="h-4 w-4 relative grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://cdn.simpleicons.org/${skill.icon}/white`}
                          alt={skill.name}
                          className="object-contain w-full h-full"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
