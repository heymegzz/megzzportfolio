export interface ExperienceStat {
  value: string;
  label: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string; // "Full-time" | "Internship" | "Open Source" | "Contract"
  dateRange: string;
  location: string; // "Remote" | "On-site" | city
  description: string;
  expandedDescription?: string;
  stats?: ExperienceStat[];
  tags: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Acme Labs",
    role: "Software Engineer",
    type: "Full-time",
    dateRange: "Jan 2025 – Present",
    location: "Remote",
    description:
      "Building next-generation developer tools with AI-powered code analysis and automated refactoring pipelines.",
    expandedDescription:
      "Led the design and implementation of an AI-assisted code review system processing 10,000+ PRs monthly. Built real-time collaboration features using WebSockets and CRDTs. Reduced CI/CD pipeline times by 40% through intelligent caching and parallel execution strategies.",
    stats: [
      { value: "10K+", label: "PRs Processed" },
      { value: "40%", label: "Faster CI/CD" },
      { value: "3", label: "Patents Filed" },
    ],
    tags: ["TypeScript", "React", "Node.js", "AI/ML", "PostgreSQL"],
  },
  {
    company: "StartupXYZ",
    role: "Full-Stack Developer",
    type: "Internship",
    dateRange: "Jun 2024 – Dec 2024",
    location: "Remote",
    description:
      "End-to-end development of a SaaS analytics platform serving 500+ active users with real-time dashboards.",
    expandedDescription:
      "Architected a real-time analytics dashboard using Next.js, Prisma, and WebSocket streaming. Implemented role-based access control and multi-tenant data isolation. Designed the notification system handling 50K+ events daily with zero message loss.",
    stats: [
      { value: "500+", label: "Active Users" },
      { value: "50K+", label: "Daily Events" },
    ],
    tags: ["Next.js", "Prisma", "PostgreSQL", "Redis", "AWS"],
  },
  {
    company: "Open Source Collective",
    role: "Core Maintainer",
    type: "Open Source",
    dateRange: "Mar 2024 – Present",
    location: "Remote",
    description:
      "Maintaining a developer tools framework with 200+ GitHub stars and growing community adoption.",
    expandedDescription:
      "Core maintainer of a CLI framework for developer productivity. Grew adoption from 50 to 200+ GitHub stars. Implemented plugin architecture, automated release pipeline, and comprehensive documentation site. Review 20+ community PRs monthly.",
    stats: [
      { value: "200+", label: "GitHub Stars" },
      { value: "20+", label: "Monthly PRs" },
    ],
    tags: ["TypeScript", "Node.js", "CLI", "Open Source"],
  },
];
