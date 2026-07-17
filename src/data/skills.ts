export interface Skill {
  name: string;
  icon?: string; // simple-icons slug for cdn.simpleicons.org
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "AI / ML",
    skills: [
      { name: "Python", icon: "python" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "LangChain", icon: "langchain" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "OpenAI", icon: "openai" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    category: "Data & Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Supabase", icon: "supabase" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Go", icon: "go" },
      { name: "Rust", icon: "rust" },
      { name: "C++", icon: "cplusplus" },
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "AWS", icon: "amazonwebservices" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Figma", icon: "figma" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export const totalSkillCount = skillsData.reduce(
  (acc, cat) => acc + cat.skills.length,
  0
);
