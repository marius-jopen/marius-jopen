// ============================================================
// CONTENT CONFIGURATION
// ============================================================
// Edit this file to update all website content.
// No need to touch any other files for content changes.
// ============================================================

export const siteConfig = {
  title: "Marius Jopen | Creative Technologist",
  description:
    "Creative Technologist operating at the intersection of code, culture, and narrative. Berlin based, globally active.",
};

export const hero = {
  name: "Marius Jopen",
  role: "Creative Technologist.",
  location: "Berlin based.",
  global: "Globally active.",
};

export const about = {
  text: "I operate at the intersection of code, culture, and narrative. As a Creative Technologist, I build systems that do more than just function—they tell stories. My work oscillates between the precision of high-end web development and the chaotic beauty of generative AI.",
};

export interface Project {
  name: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: "THE ROBOTS",
    description: "Powering creative companies with AI",
    url: "https://therobots.ai",
  },
  {
    name: "100k",
    description: "Web Development Studio",
    url: "https://100k.studio",
  },
  {
    name: "Spacebirth 2",
    description: "Awarded Feature Sci-Fi Movie",
    url: "https://spacebirth2.com",
  },
];

export interface Client {
  name: string;
  url: string;
}

export const clients: Client[] = [
  { name: "LVMH", url: "https://www.lvmh.com" },
  { name: "Céline", url: "https://www.celine.com" },
  { name: "Google", url: "https://www.google.com" },
  { name: "LAS Artfoundation", url: "https://www.lightartspace.org" },
  { name: "Stefan Sagmeister", url: "https://sagmeister.com" },
];

export const contact = {
  intro:
    "I am currently open to select commissions and collaborations—particularly where cinema, AI, and code intersect.",
  email: "mail@mariusjopen.com",
  links: [
    { label: "Instagram", url: "https://instagram.com/mariusjopen" },
    { label: "LinkedIn", url: "https://linkedin.com/in/mariusjopen" },
  ],
};

export const news = {
  intro:
    "Every week, I document the chaos of creation. From AI workflows to the realities of running a studio, I share the process behind the projects.",
  subscribeUrl: "/subscribe",
  readUrl: "/news",
};

export const cta = {
  primaryLabel: "Get In Contact",
  primaryUrl: "mailto:mail@mariusjopen.com",
  secondaryLabel: "Subscribe",
  secondaryUrl: "/subscribe",
};
