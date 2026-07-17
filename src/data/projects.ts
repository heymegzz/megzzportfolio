export interface ProjectLink {
  label: string;
  href: string;
  type: "demo" | "github" | "case-study";
}

export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  techStack: string[];
  links: ProjectLink[];
  featured: boolean;
  coverImage?: string;
}

export const projectsData: Project[] = [
  {
    title: "ProjectAlpha",
    description: "AI-powered code review platform with automated refactoring suggestions and real-time collaboration.",
    category: "Full-Stack AI",
    tags: ["Full-Stack AI", "Developer Tools"],
    techStack: ["TypeScript", "Next.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    links: [
      { label: "Demo", href: "#", type: "demo" },
      { label: "GitHub", href: "#", type: "github" },
      { label: "Case Study", href: "#", type: "case-study" },
    ],
    featured: true,
    coverImage: "/placeholder-project-1.svg",
  },
  {
    title: "DataStream",
    description: "Real-time analytics dashboard with WebSocket streaming and interactive data visualizations.",
    category: "Data Engineering",
    tags: ["Data Engineering", "Real-time"],
    techStack: ["React", "D3.js", "Node.js", "WebSocket", "ClickHouse", "Grafana"],
    links: [
      { label: "Demo", href: "#", type: "demo" },
      { label: "GitHub", href: "#", type: "github" },
    ],
    featured: true,
    coverImage: "/placeholder-project-2.svg",
  },
  {
    title: "ChainVault",
    description: "Decentralized credential verification system with on-chain attestations and zero-knowledge proofs.",
    category: "Web3",
    tags: ["Web3", "Security"],
    techStack: ["Solidity", "Next.js", "Hardhat", "IPFS", "ethers.js"],
    links: [
      { label: "Demo", href: "#", type: "demo" },
      { label: "GitHub", href: "#", type: "github" },
      { label: "Case Study", href: "#", type: "case-study" },
    ],
    featured: true,
    coverImage: "/placeholder-project-3.svg",
  },
  {
    title: "DevCLI",
    description: "Developer productivity CLI with plugin architecture and automated workflow orchestration.",
    category: "Developer Tools",
    tags: ["CLI", "Open Source"],
    techStack: ["TypeScript", "Node.js", "Ink", "Vitest"],
    links: [
      { label: "GitHub", href: "#", type: "github" },
    ],
    featured: false,
  },
  {
    title: "HealthSync",
    description: "Healthcare appointment management system with real-time notifications and calendar integration.",
    category: "Healthcare",
    tags: ["Healthcare", "SaaS"],
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Twilio", "Vercel"],
    links: [
      { label: "Demo", href: "#", type: "demo" },
      { label: "GitHub", href: "#", type: "github" },
    ],
    featured: false,
  },
  {
    title: "PixelForge",
    description: "Browser-based image editor with AI-powered background removal and batch processing.",
    category: "AI/ML",
    tags: ["AI/ML", "Creative Tools"],
    techStack: ["React", "Canvas API", "TensorFlow.js", "Web Workers"],
    links: [
      { label: "Demo", href: "#", type: "demo" },
      { label: "GitHub", href: "#", type: "github" },
    ],
    featured: false,
  },
  {
    title: "NoteGraph",
    description: "Knowledge management app with bidirectional linking and graph-based note visualization.",
    category: "Productivity",
    tags: ["Productivity", "Graph"],
    techStack: ["Next.js", "D3.js", "SQLite", "MDX"],
    links: [
      { label: "GitHub", href: "#", type: "github" },
    ],
    featured: false,
  },
  {
    title: "APIBridge",
    description: "Universal API gateway with rate limiting, caching, and automatic SDK generation.",
    category: "Infrastructure",
    tags: ["Infrastructure", "API"],
    techStack: ["Go", "Redis", "Docker", "OpenAPI"],
    links: [
      { label: "GitHub", href: "#", type: "github" },
    ],
    featured: false,
  },
];
