import IndexSidebar from "@/components/IndexSidebar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-full max-w-[960px] mx-auto lg:border-x lg:border-dashed lg:border-white/10 min-h-screen">
        <div className="flex flex-col lg:flex-row">
          {/* Main Content Column (720px) */}
          <div className="flex-1 w-full lg:max-w-[720px] lg:border-r lg:border-dashed lg:border-white/10">
            <Hero />
            <Experience />
            <Projects />
            <Education />
            <Skills />
            <Achievements />
            <Contact />
          </div>
          
          {/* Sidebar Column (240px) */}
          <div className="hidden lg:block w-[240px] shrink-0 relative">
            <IndexSidebar />
          </div>
        </div>
      </div>
      <CommandPalette />
    </main>
  );
}
