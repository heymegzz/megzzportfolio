"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/data/achievements";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import SectionDivider from "@/components/SectionDivider";

export default function Achievements() {
  return (
    <section id="achievements" className="py-10 px-10 scroll-mt-24 relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <h2 className="text-[17px] font-bold text-white tracking-tight">
            Highlights
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievementsData.map((group) => (
            <motion.div key={group.category} variants={fadeInUp} className="flex flex-col">
              <h3 className="text-sm font-medium text-zinc-400 mb-4 pb-2 border-b border-white/10">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="group flex flex-col rounded-xl border border-transparent p-3 -mx-3 transition-colors hover:border-white/10 hover:bg-white/5"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-white/5">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                        {item.result}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-200 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {item.context}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <SectionDivider />
    </section>
  );
}
