"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experienceData } from "@/data/experience";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-10 px-10 scroll-mt-24 border-b border-dashed border-white/10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <h2 className="text-[17px] font-bold text-white tracking-tight">Experiences</h2>
        </motion.div>

        <div className="space-y-2">
          {experienceData.map((job, index) => {
            const isExpanded = expandedId === `${job.company}-${index}`;

            return (
              <motion.div
                key={`${job.company}-${index}`}
                variants={fadeInUp}
                className="group rounded-xl border border-transparent p-4 transition-colors hover:border-white/5 hover:bg-white/5"
              >
                <div 
                  className="flex items-start gap-4 cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : `${job.company}-${index}`)}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-black">
                    <span className="font-bold text-lg">{job.company.charAt(0)}</span>
                  </div>

                  <div className="flex flex-1 flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="font-semibold text-zinc-100">{job.role}</h3>
                      <p className="text-sm text-zinc-400 mt-0.5">{job.company}</p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-200">
                        <span>{job.dateRange}</span>
                        <ChevronDown className={`h-3.5 w-3.5 text-zinc-500 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                      <span className="text-xs text-zinc-500">{job.location}</span>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-14">
                        <p className="text-sm leading-relaxed text-zinc-400 mb-4">
                          {job.expandedDescription || job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded border border-white/10 bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-zinc-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
