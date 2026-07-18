interface AchievementItem {
  year: string;
  title: string;
  result: string;
  context: string;
}

export interface AchievementGroup {
  category: string;
  items: AchievementItem[];
}

export const achievementsData: AchievementGroup[] = [
  {
    category: "Hackathons",
    items: [
      {
        year: "2025",
        title: "Global AI Hackathon",
        result: "1st Place",
        context: "Built an AI-powered accessibility tool that won among 500+ teams across 40 countries.",
      },
      {
        year: "2024",
        title: "HackTheNorth",
        result: "Winner",
        context: "Developed a real-time collaborative coding platform with AI pair programming features.",
      },
      {
        year: "2024",
        title: "DevPost Summer Hack",
        result: "2nd Place",
        context: "Created a browser extension for automated code documentation using LLMs.",
      },
    ],
  },
  {
    category: "Competitive Programming",
    items: [
      {
        year: "2025",
        title: "Codeforces",
        result: "Expert (1600+)",
        context: "Achieved Expert rating with consistent performance in Div 2 contests.",
      },
      {
        year: "2024",
        title: "LeetCode Weekly Contest",
        result: "Top 5%",
        context: "Ranked in the top 5% globally across 50+ weekly contests.",
      },
    ],
  },
  {
    category: "Recognition",
    items: [
      {
        year: "2025",
        title: "DevConf Speaker",
        result: "Invited Speaker",
        context: "Delivered a talk on 'Building AI-Native Developer Tools' to 300+ attendees.",
      },
      {
        year: "2024",
        title: "GitHub Campus Expert",
        result: "Selected",
        context: "Recognized for leading developer community initiatives and open-source advocacy.",
      },
      {
        year: "2024",
        title: "Best Startup Pitch",
        result: "Winner",
        context: "Won the university startup competition with an AI-powered EdTech platform pitch.",
      },
    ],
  },
];
