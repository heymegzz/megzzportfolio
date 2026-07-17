"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Education() {
  return (
    <section id="education" className="py-10 px-10 scroll-mt-24 border-b border-dashed border-white/10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <h2 className="text-[17px] font-bold text-white tracking-tight">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              variants={fadeInUp}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-medium text-zinc-300 mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-zinc-400">{edu.specialization}</p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                    {edu.dateRange}
                  </span>
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-2 py-1 rounded-md border border-white/10">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">CGPA</span>
                    <span className="text-xs font-medium text-zinc-200">{edu.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
