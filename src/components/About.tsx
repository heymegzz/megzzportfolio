"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { aboutData } from "@/data/about";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function About() {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <h2 className="font-mono text-sm tracking-widest text-zinc-500 uppercase mb-4">
            About
          </h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            {aboutData.summary}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-4">
          {aboutData.stories.map((story) => (
            <div
              key={story.title}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:bg-white/10"
            >
              <button
                onClick={() =>
                  setExpandedStory(
                    expandedStory === story.title ? null : story.title
                  )
                }
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-zinc-200">{story.title}</span>
                <ChevronDown
                  className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${
                    expandedStory === story.title ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedStory === story.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 pb-4 pt-0 text-sm leading-relaxed text-zinc-400">
                      {story.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
