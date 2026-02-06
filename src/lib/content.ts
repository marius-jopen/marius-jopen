// ============================================================
// CONTENT CONFIGURATION
// ============================================================
// Edit this file to update all website content.
// No need to touch any other files for content changes.
// ============================================================

export const siteConfig = {
  title: "Marius Jopen | Creative Technologist",
  description:
    "Creative Technologist & Director operating at the intersection of code, cinema, and visual art. Combining high-end tech architecture with generative AI. Berlin based, globally active.",
  };

export const hero = {
  name: "Marius Jopen",
  role: "Creative Technologist.",
  location: "Berlin based.",
  global: "Globally active.",
};

export const about = {
  paragraphs: [
    "I operate at the intersection of code, cinema, and visual art. My practice is driven by exploration. I translate emerging technologies into digital systems and visual narratives.",
    "My work oscillates between the precision of high-end tech architecture and the chaotic beauty of generative AI. I combine technical logic with artistic intent to create work that is visual, clear, and radically alive.",
  ],
};

export interface Project {
  name: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: "THE ROBOTS",
    description: "AI Strategy & Implementation Laboratory. Founded by Paula Kühn and me.",
    url: "https://therobots.world",
  },
  {
    name: "100k",
    description: "Web Development Studio. Founded by Armin Unruh and me.",
    url: "https://100k.studio",
  },
  {
    name: "Ghostbirth 2",
    description: "Feature Horror Movie about a pregnant ghost in a massage studio in Bangkok.",
    url: "https://blog.mariusjopen.com/in-search-of-a-pregnant-ghost/",
  },
  {
    name: "Spacebirth 2",
    description: "Psychedelic Feature Sci-Fi Movie made from cardboard. A film by Richard Keith, Audrey Belaud and me.",
    url: "https://spacebirth2.com",
  },
];

export interface Client {
  name: string;
  url: string;
}

export const clients: Client[] = [
  { name: "Google", url: "" },
  { name: "LVMH", url: "" },
  { name: "Louis Vuitton", url: "" },
  { name: "Céline", url: "" },
  { name: "Burberry", url: "" },
  { name: "Loro Piana", url: "" },
  { name: "McLaren", url: "" },
  { name: "Marvel", url: "" },
  { name: "Audemars Piguet", url: "" },
  { name: "Stefan Sagmeister", url: "" },
  { name: "Art Camp", url: "" },
  { name: "Limn", url: "" },
  { name: "WiP", url: "" },
  { name: "LAS Art Foundation", url: "" },
  { name: "Tinder", url: "" },
  { name: "Wallet Connect", url: "" },
  { name: "Hypebeast", url: "" },
  { name: "Tiger of Sweden", url: "" },
  { name: "Institut Français de la Mode", url: "" },
  { name: "Skepta", url: "" },
  { name: "DJ Hell", url: "" },
  { name: "Len Faki", url: "" },
  { name: "Federal Government of Germany", url: "" },
];

export const contact = {
  intro:
    "I am currently open to select commissions and collaborations.",
  email: "mail@mariusjopen.com",
  links: [
    { label: "Instagram", url: "https://instagram.com/mariusjopen" },
    { label: "LinkedIn", url: "https://linkedin.com/in/mariusjopen" },
  ],
};

export const news = {
  intro:
    "Every week, I document the chaos of creation. From AI workflows to the realities of running a studio, I share the process behind the projects. Feel free to subscribe to my newsletter.",
  subscribeUrl: "https://blog.mariusjopen.com/",
  readUrl: "/news",
};

export const cta = {
  primaryLabel: "Get In Contact",
  primaryUrl: "mailto:mail@mariusjopen.com",
  secondaryLabel: "Subscribe",
  secondaryUrl: "https://blog.mariusjopen.com/",
};

export const footer = {
  legalLabel: "Imprint",
  legalUrl: "/imprint",
};
