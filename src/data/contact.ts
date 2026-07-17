export interface ContactData {
  headline: string;
  email: string;
  availability: string;
  socials: { label: string; href: string; icon: string }[];
  copyright: string;
}

export const contactData: ContactData = {
  headline: "Let's work together",
  email: "hello@example.com",
  availability: "Available for freelance & full-time roles",
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  ],
  copyright: `© ${new Date().getFullYear()} Jane Doe. All rights reserved.`,
};
