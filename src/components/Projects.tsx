"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Projects() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="py-10 px-10 scroll-mt-24 border-b border-dashed border-white/10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <h2 className="text-[17px] font-bold text-white tracking-tight">Projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-colors hover:border-white/20"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border-b border-white/5">
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-zinc-700">
                  IMG
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-zinc-100 text-[15px]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 rounded-full border border-white/5 bg-zinc-900/50 px-2 py-0.5">
                    <div className={`h-1.5 w-1.5 rounded-full ${project.title === "VengenceUI" || project.title === "ProjectAlpha" ? "bg-emerald-500" : project.title.includes("Scribble") ? "bg-red-500" : "bg-zinc-500"}`} />
                    <span className="text-[10px] font-medium text-zinc-400">
                      {project.title === "ProjectAlpha" ? "Live" : project.title.includes("DataStream") ? "Building" : "Live"}
                    </span>
                  </div>
                </div>

                <p className="mb-6 flex-1 text-[13px] leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {/* Simulated small tech icons similar to simple-icons */}
                    {project.techStack.slice(0, 4).map((tech) => (
                      <div key={tech} className="h-4 w-4 bg-zinc-800 rounded-sm" title={tech} />
                    ))}
                  </div>

                  {project.links.filter(l => l.type === "demo" || l.type === "github")[0] && (
                    <a
                      href={project.links.filter(l => l.type === "demo" || l.type === "github")[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] font-medium text-zinc-400 transition-colors hover:text-white"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
