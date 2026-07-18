interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

interface AchievementChip {
  label: string;
}

export interface HeroData {
  name: string;
  role: string;
  location: string;
  availableForWork: boolean;
  bioParagraphs: string[];
  socials: SocialLink[];
  chips: AchievementChip[];
  stats: { label: string; value: string }[];
}

export const heroData: HeroData = {
  name: "Meghna Nair",
  role: "Builder first. Everything else came from curiosity.",
  location: "India · Remote",
  availableForWork: true,
  bioParagraphs: [
    "Curiosity pulled me into AI, full-stack engineering, data, product thinking, and eventually competitive programming.",
    "I enjoy building complete products, from models and backends to the interfaces people actually use.",
    "Building one project after another until one changes everything.",
  ],
  socials: [
    { label: "Email", href: "mailto:meghnaofficial66@gmail.com", icon: "Mail" },
    { label: "GitHub", href: "https://github.com/heymegzz", icon: "Github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/meghna-nair-159458227/", icon: "Linkedin" },
    { label: "LeetCode", href: "https://leetcode.com/u/heymegzz/", icon: "LeetCode" },
    { label: "Codeforces", href: "https://codeforces.com/profile/heymegzz", icon: "Codeforces" },
  ],
  chips: [],
  stats: [],
};
