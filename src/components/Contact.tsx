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
          <blockquote className="italic text-zinc-400 text-lg mb-6 leading-relaxed">
            &quot;Do so much work that it would be unreasonable for you to not be successful.&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-zinc-800" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
              Alex Hormozi
            </span>
            <div className="h-px w-8 bg-zinc-800" />
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
