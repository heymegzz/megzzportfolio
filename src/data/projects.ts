export type TechIcon = {
  name: string;
  icon: string; // matches simple-icons name
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  status: "Live" | "Building" | "Not Started";
  techIcons?: TechIcon[];
  links: {
    label: string;
    href: string;
    type: "demo" | "github" | "case-study";
  }[];
  featured: boolean;
  coverImage?: string;
};

// We use Microlink to auto-generate beautiful screenshots of the live websites.
const getScreenshotUrl = (url: string) => 
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

export const projectsData: Project[] = [
  {
    title: "Runlog",
    slug: "runlog",
    description: "Distributed cron scheduling and workflow automation platform.",
    status: "Live",
    techIcons: [
      { name: "React", icon: "react" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Socket.io", icon: "socketdotio" },
    ],
    links: [
      { label: "Website", href: "https://runlog-eta.vercel.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/heymegzz/Runlog", type: "github" },
    ],
    featured: true,
    coverImage: getScreenshotUrl("https://runlog-eta.vercel.app/"),
  },
  {
    title: "Autopsy",
    slug: "autopsy",
    description: "Production-grade AI-powered forensic analysis engine for failed startups.",
    status: "Live",
    techIcons: [
      { name: "React", icon: "react" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Python", icon: "python" },
      { name: "Vite", icon: "vite" },
    ],
    links: [
      { label: "Website", href: "https://autopsy-ai-eight.vercel.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/heymegzz/autopsy-ai", type: "github" },
    ],
    featured: true,
    coverImage: getScreenshotUrl("https://autopsy-ai-eight.vercel.app/"),
  },
  {
    title: "Earmark.ai",
    slug: "earmark-ai",
    description: "Full-stack AI-powered financial fraud detection platform.",
    status: "Live",
    techIcons: [
      { name: "React", icon: "react" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Python", icon: "python" },
    ],
    links: [
      { label: "Website", href: "https://earmark-ai.vercel.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/heymegzz/earmark.ai", type: "github" },
    ],
    featured: true,
    coverImage: getScreenshotUrl("https://earmark-ai.vercel.app/"),
  },
  {
    title: "ChurnIQ",
    slug: "churniq",
    description: "Agentic AI system predicting player churn and autonomously generating retention strategies.",
    status: "Live",
    techIcons: [
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Streamlit", icon: "streamlit" },
      { name: "Python", icon: "python" },
    ],
    links: [
      { label: "Website", href: "https://churniq-bxfx3ucjbzptzd6ayupadj.streamlit.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/VanshSharma88/ChurnIQ", type: "github" },
    ],
    featured: true,
    coverImage: getScreenshotUrl("https://churniq-bxfx3ucjbzptzd6ayupadj.streamlit.app/"),
  },
  {
    title: "Causal Uplift Modeling System",
    slug: "causal-uplift",
    description: "Estimating individualized treatment effects on 13.9M users using metalearners and Causal Forests.",
    status: "Building",
    techIcons: [
      { name: "Python", icon: "python" },
      { name: "Scikit-learn", icon: "scikitlearn" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/heymegzz/causal-uplift", type: "github" },
    ],
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    title: "Dynamic Pricing Engine",
    slug: "dynamic-pricing-engine",
    description: "ML-powered pricing engine optimizing prices to maximize revenue. Trained on 1.4M listings.",
    status: "Live",
    techIcons: [
      { name: "SciPy", icon: "scipy" },
      { name: "Streamlit", icon: "streamlit" },
    ],
    links: [
      { label: "Website", href: "https://dynamic-pricing-engine-66.streamlit.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/heymegzz/dynamic-pricing-engine", type: "github" },
    ],
    featured: true,
    coverImage: getScreenshotUrl("https://dynamic-pricing-engine-66.streamlit.app/"),
  },
  {
    title: "FitFusion",
    slug: "fitfusion",
    description: "Full-stack wellness platform built for campus life, integrating fitness and nutrition via APIs.",
    status: "Building",
    techIcons: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React", icon: "react" },
      { name: "Express", icon: "express" },
      { name: "Prisma", icon: "prisma" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Jgauri24/fitfusion", type: "github" },
    ],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1526506118228-4ce312b9a117?auto=format&fit=crop&q=80",
  },
  {
    title: "ReliefOps",
    slug: "reliefops",
    description: "Disaster response system connecting citizens and volunteers with real-time resource allocation.",
    status: "Live",
    techIcons: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redux", icon: "redux" },
    ],
    links: [
      { label: "Website", href: "https://relief-ops-two.vercel.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/MouliSrivastava05/ReliefOps", type: "github" },
    ],
    featured: false,
    coverImage: getScreenshotUrl("https://relief-ops-two.vercel.app/"),
  },
  {
    title: "Amazon Electronics Sales Dashboard",
    slug: "amazon-dashboard",
    description: "Analyzes Amazon Electronics product data to identify key drivers of product demand and engagement.",
    status: "Live",
    techIcons: [
      { name: "Google Sheets", icon: "googlesheets" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Crunchymon/DVA_CapStone_Amazon_Electronics_Sales", type: "github" },
    ],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80",
  },
  {
    title: "Blog Automation",
    slug: "blog-automation",
    description: "Automated SEO blog engine. Three LLM providers, one pipeline, zero manual writing.",
    status: "Live",
    techIcons: [
      { name: "Python", icon: "python" },
    ],
    links: [
      { label: "Website", href: "https://blog-automation-self.vercel.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/jaiswalsachin49/blog_automation", type: "github" },
    ],
    featured: false,
    coverImage: getScreenshotUrl("https://blog-automation-self.vercel.app/"),
  },
  {
    title: "NYC Airbnb Analysis",
    slug: "nyc-airbnb",
    description: "Complete data analytics pipeline for 48K+ NYC Airbnb listings. ETL and Tableau dashboards.",
    status: "Live",
    techIcons: [
      { name: "Python", icon: "python" },
      { name: "Tableau", icon: "tableau" },
      { name: "Pandas", icon: "pandas" },
      { name: "SciPy", icon: "scipy" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/heymegzz/E_G18_NYCAirbnbAnalysis", type: "github" },
    ],
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&q=80",
  },
  {
    title: "PeerNova",
    slug: "peernova",
    description: "Campus collaboration platform enabling students to create study groups and share resources.",
    status: "Live",
    techIcons: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "MySQL", icon: "mysql" },
      { name: "Prisma", icon: "prisma" },
    ],
    links: [
      { label: "Website", href: "https://peer-nova.vercel.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/heymegzz/PeerNova", type: "github" },
    ],
    featured: false,
    coverImage: getScreenshotUrl("https://peer-nova.vercel.app/"),
  },
  {
    title: "Nexcoin",
    slug: "nexcoin",
    description: "Responsive web app tracking live cryptocurrency data using Next.js and CoinGecko API.",
    status: "Live",
    techIcons: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Firebase", icon: "firebase" },
      { name: "Framer Motion", icon: "framer" },
      { name: "Chart.js", icon: "chartdotjs" },
    ],
    links: [
      { label: "Website", href: "https://nexcoin-heymegzzs-projects.vercel.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/heymegzz/nexcoin", type: "github" },
    ],
    featured: false,
    coverImage: getScreenshotUrl("https://nexcoin-heymegzzs-projects.vercel.app/"),
  },
  {
    title: "Capstone Project",
    slug: "capstone",
    description: "Basic capstone project created using only HTML and CSS as part of first semester project.",
    status: "Live",
    techIcons: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
    links: [
      { label: "Website", href: "https://capstone-kohl-sigma.vercel.app/", type: "demo" },
      { label: "GitHub", href: "https://github.com/heymegzz/capstone", type: "github" },
    ],
    featured: false,
    coverImage: getScreenshotUrl("https://capstone-kohl-sigma.vercel.app/"),
  },
];
