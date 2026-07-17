export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface AchievementChip {
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
  role: "Full-Stack AI & ML Engineer",
  location: "India · Remote",
  availableForWork: true,
  bioParagraphs: [
    "Curiosity over specialization. That's been my roadmap.",
    "I move between AI, engineering, data, product, and algorithms without picking favorites. Every project is an excuse to learn something I didn't know yesterday.",
    "Still experimenting. Still shipping. Still having fun.",
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
