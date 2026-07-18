import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen w-full relative pt-24 pb-20 px-6 sm:px-10 lg:px-[20%]">
      <div className="flex items-center gap-4 mb-12">
        <Link 
          href="/#projects" 
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
        </Link>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">All Projects</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => {
          const demoLink = project.links.find(l => l.type === "demo")?.href;
          return (
            <div
              key={project.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 transition-colors hover:border-black/10 dark:hover:border-white/20"
            >
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" />
              
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-900 border-b border-black/5 dark:border-white/5">
                {project.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-zinc-500">
                    IMG
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4 relative z-10 pointer-events-none">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-[15px]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/5 bg-white/50 dark:bg-zinc-900/50 px-2 py-0.5">
                    <div className={`h-1.5 w-1.5 rounded-full ${
                      project.status === "Live" ? "bg-emerald-500" : 
                      project.status === "Building" ? "bg-amber-500" : "bg-zinc-500"
                    }`} />
                    <span className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400">
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="mb-6 flex-1 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pointer-events-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techIcons?.slice(0, 4).map((tech) => (
                      <div key={tech.name} className="h-4 w-4 relative" title={tech.name}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://cdn.simpleicons.org/${tech.icon}/white`}
                          alt={tech.name}
                          className="object-contain w-full h-full opacity-60 dark:invert-0 invert"
                        />
                      </div>
                    ))}
                  </div>

                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
