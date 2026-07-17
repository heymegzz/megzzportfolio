"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Contact() {
  return (
    <footer id="contact" className="py-16 px-10 scroll-mt-24 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-lg flex flex-col items-center"
      >
        <motion.div variants={fadeInUp} className="w-full">
          <blockquote className="italic text-zinc-400 text-base mb-6 leading-relaxed max-w-md mx-auto">
            &quot;The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-zinc-800" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
              George Bernard Shaw
            </span>
            <div className="h-px w-8 bg-zinc-800" />
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
