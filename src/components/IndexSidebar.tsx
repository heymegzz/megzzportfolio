"use client";

import { useActiveSection } from "@/lib/hooks";

const sections = [
  { id: "hero", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
];

export default function IndexSidebar() {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <nav className="flex flex-col gap-4 mt-2">
      <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase mb-1">
        Index
      </h3>
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ease-out flex items-center gap-3 ${
              isActive
                ? "text-zinc-800 dark:text-zinc-200"
                : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
            }`}
          >
            <span
              className={`h-[1px] transition-all duration-300 ease-out ${
                isActive ? "w-4 bg-zinc-800 dark:bg-zinc-200" : "w-0 bg-transparent"
              }`}
            />
            {section.label}
          </a>
        );
      })}
    </nav>
  );
}
