import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/data/projects";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const githubLink = project.links.find(l => l.type === "github")?.href;
  const demoLink = project.links.find(l => l.type === "demo")?.href;
  const caseStudyLink = project.links.find(l => l.type === "case-study")?.href;

  return (
    <div className="min-h-screen w-full relative pt-24 pb-20 px-6 sm:px-10 lg:px-[30%]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/#projects" 
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Projects / {project.title}</p>
        </div>
      </div>

      {/* Main Image / Video Area */}
      <div className="w-full aspect-video rounded-xl border border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative mb-6">
        {project.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={project.coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-mono text-zinc-500">
            Preview Image
          </div>
        )}
      </div>

      {/* Links Bar */}
      <div className="flex items-center justify-center gap-6 sm:gap-12 py-4 border-b border-black/5 dark:border-white/5 mb-8">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <FaGithub className="w-4 h-4" />
            <span>Github</span>
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <Globe className="w-4 h-4" />
            <span>Website</span>
          </a>
        )}
        {caseStudyLink && (
          <a href={caseStudyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <FileText className="w-4 h-4" />
            <span>Post</span>
          </a>
        )}
      </div>

      {/* Details */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h2>
          <div className="flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/50 px-2 py-0.5">
            <div className={`h-1.5 w-1.5 rounded-full ${
              project.status === "Live" ? "bg-emerald-500" : 
              project.status === "Building" ? "bg-amber-500" : "bg-zinc-500"
            }`} />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {project.status}
            </span>
          </div>
        </div>
        <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.longDescription || project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-4">Stack used</h3>
        <div className="flex flex-wrap gap-2">
          {project.techIcons?.map((tech) => (
            <div 
              key={tech.name} 
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900"
            >
              <div className="w-4 h-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`https://cdn.simpleicons.org/${tech.icon}/white`}
                  alt={tech.name}
                  className="w-full h-full object-contain dark:invert-0 invert opacity-70"
                />
              </div>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
