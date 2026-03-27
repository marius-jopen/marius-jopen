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
  location: "Globally active.",
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

export interface ProjectCategory {
  label: string;
  items: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    label: "Ventures & Initiated Projects:",
    items: [
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
        name: "Love Foundation",
        description: "Global community movement for unconditional love, clean water access, and social change. Co-founded by Philippe Birker, David Caspers and me.",
        url: "https://love-foundation.org",
      },
    ],
  },
  {
    label: "Projects:",
    items: [
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
      {
        name: "THE POSTER TIMES",
        description: "One poster per day for one and a half years, a visual response to daily news events.",
        url: "https://www.the-poster-times.xyz/",
      },
    ],
  },
  {
    label: "Affiliated:",
    items: [
      {
        name: "ArtCamp",
        description: "Multi-disciplinary creative studio blending traditional techniques with emerging technology. Founded by Santiago Carrasquilla in New York.",
        url: "https://www.madeatartcamp.com/",
      },
      {
        name: "Limn",
        description: "AI research and development lab exploring latent space as creative and philosophical territory. Founded by Tobias Rees.",
        url: "https://www.instagram.com/limn_ai/",
      },
    ],
  },
];

export interface Client {
  name: string;
  url?: string;
}

export const clients: Client[] = [
  { name: "Google" },
  { name: "LVMH" },
  { name: "Louis Vuitton" },
  { name: "Céline" },
  { name: "Burberry" },
  { name: "Loro Piana" },
  { name: "McLaren" },
  { name: "Marvel" },
  { name: "Audemars Piguet" },
  { name: "Stefan Sagmeister" },
  { name: "Art Camp" },
  { name: "Limn" },
  { name: "WiP" },
  { name: "LAS Art Foundation" },
  { name: "Tinder" },
  { name: "Wallet Connect" },
  { name: "Hypebeast" },
  { name: "Tiger of Sweden" },
  { name: "Institut Français de la Mode" },
  { name: "Skepta" },
  { name: "DJ Hell" },
  { name: "Len Faki" },
  { name: "Federal Government of Germany" },
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
  secondaryLabel: "Subscribe",
  secondaryUrl: "https://blog.mariusjopen.com/",
};

export const footer = {
  legalLabel: "Imprint",
  legalUrl: "/imprint",
};
