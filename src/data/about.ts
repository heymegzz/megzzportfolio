export interface AboutStory {
  title: string;
  content: string;
}

export interface AboutData {
  summary: string;
  stories: AboutStory[];
}

export const aboutData: AboutData = {
  summary:
    "I build because I enjoy solving hard problems. What started with tinkering on static HTML pages has grown into production-grade systems — from AI-powered platforms to full-stack SaaS applications. Along the way, I've shipped dozens of projects, contributed to open source, and spoken at developer conferences. Today, I focus on full-stack development and AI tooling, turning prototypes into systems people can rely on.",
  stories: [
    {
      title: "Where It Started",
      content:
        "In 2020 I shipped my first website — a static landing page with responsive layout, a mobile nav, and vanilla JavaScript. No framework, no backend — just HTML, CSS, and curiosity. That foundation is the through-line to today: building production systems, speaking at conferences, and maintaining open-source projects used by hundreds of developers.",
    },
    {
      title: "The Engineering Path",
      content:
        "I started with a simple question: how do you make complex systems actually work? That curiosity grew into building production applications — from real-time dashboards to AI-powered pipelines. Winning multiple hackathons taught me the lesson that shapes everything I build: great software isn't about fancy architectures, it's about shipping systems that hold up in production.",
    },
    {
      title: "Building in Public",
      content:
        "The part I keep coming back to is the developer experience underneath the product. I've built internal tools, CLI utilities, component libraries, and deployment pipelines that make teams move faster. What pulls me in is making development fast, reliable, and enjoyable at scale.",
    },
    {
      title: "From Hackathons to Production",
      content:
        "Build fast, ship faster, iterate. Co-founding a startup taught me the gap between demo and production is where engineering happens. Whether shipping SaaS serving thousands of users or maintaining open-source tools, the real work is error handling, feedback loops, and making sure the system doesn't break when real users hit it.",
    },
  ],
};
