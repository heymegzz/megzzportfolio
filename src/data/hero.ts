export interface SocialLink {
  label: string;
  href: string;
  icon: string; // lucide icon name
}

export interface AchievementChip {
  label: string;
}

export interface HeroData {
  name: string;
  age: number;
  role: string;
  location: string;
  availableForWork: boolean;
  bioBullets: string[];
  socials: SocialLink[];
  chips: AchievementChip[];
  stats: { label: string; value: string }[];
}

export const heroData: HeroData = {
  name: "Jane Doe",
  age: 20,
  role: "Engineer / Artist. I love building, breaking, and shipping things.",
  location: "San Francisco, CA",
  availableForWork: true,
  bioBullets: [
    "AI, open source, and developer tools excite me.",
    "I believe actions speak louder than words, so I put my code where my mouth is.",
    "Currently building Next-gen UI and experimental AI tools."
  ],
  socials: [
    { label: "Email", href: "mailto:hello@example.com", icon: "Mail" },
    { label: "GitHub", href: "https://github.com", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "Resume", href: "/resume.pdf", icon: "FileText" },
  ],
  chips: [
    { label: "3x Hackathon Winner" },
    { label: "OSS Contributor" },
    { label: "Speaker @ DevConf 2025" },
  ],
  stats: [
    { label: "Projects Shipped", value: "20+" },
    { label: "GitHub Stars", value: "500+" },
    { label: "Years Experience", value: "4+" },
  ],
};
