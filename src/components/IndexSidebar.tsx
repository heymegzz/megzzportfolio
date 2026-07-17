"use client";

import { useActiveSection } from "@/lib/hooks";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Highlights" },
];

export default function IndexSidebar() {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <aside className="hidden lg:block w-[240px] shrink-0 sticky top-32 h-[calc(100vh-8rem)]">
      <div className="flex flex-col space-y-6 px-10">
        <h3 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase ml-4">
          INDEX
        </h3>
        <nav className="flex flex-col space-y-3">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`group flex items-center text-xs font-medium transition-colors ${
                  isActive ? "text-zinc-200" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span
                  className={`inline-block mr-3 h-px bg-zinc-400 transition-all duration-300 ${
                    isActive ? "w-4" : "w-0 group-hover:w-2"
                  }`}
                />
                {section.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
