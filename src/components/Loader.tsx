"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-800 border-t-zinc-200" />
        <span className="font-mono text-sm tracking-widest text-zinc-500">
          LOADING
        </span>
      </motion.div>
    </div>
  );
}
