export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  link?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links?: { label: string; url: string; icon?: any }[];
};

export const highlightsData: Highlight[] = [
  {
    id: "hackathon-win",
    title: "3rd Place • Product Management Hackathon, IIT Roorkee",
    badge: "Hackathon",
    image: "/highlights/hackathon-win.png",
    link: "https://www.figma.com/design/wZPsQCjSpk1XIFZegMBHWW/PRODG?node-id=0-1&t=ok6gI8d5ssVTUjKm-1",
  },
  {
    id: "arvo-hackathon",
    title: "ARVO / Gamified Financial Learning Platform",
    badge: "UI/UX Design Hackathon · Cognizance, IIT Roorkee",
    image: "/highlights/arvo.png",
    link: "https://www.figma.com/proto/UrG62U2tXUYMtFSmrdvDZ0/Appnova_V1?node-id=814-925&starting-point-node-id=336%3A104&show-proto-sidebar=1&t=T1QJcVsTk701hq07-1",
  },
  {
    id: "dsa-solved",
    title: "500+ DSA Problems Solved",
    badge: "DSA",
    image: "/highlights/dsa.webp",
    links: [
      { label: "LeetCode", url: "https://leetcode.com/u/heymegzz/" },
      { label: "Codeforces", url: "https://codeforces.com/profile/heymegzz" }
    ]
  },
];
