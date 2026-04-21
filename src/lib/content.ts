// ============================================================
// CONTENT LOADER
// ============================================================
// Content is managed via Keystatic at /keystatic and stored as
// YAML under src/content/. Edit there — these readers load it.
// ============================================================

import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export interface Project {
  name: string;
  description: string;
  url: string;
}

export interface ProjectCategory {
  label: string;
  items: Project[];
}

export interface Client {
  name: string;
  url?: string;
}

export async function getSiteConfig() {
  const data = await reader.singletons.site.read();
  return {
    title: data?.title ?? "",
    description: data?.description ?? "",
  };
}

export async function getHero() {
  const data = await reader.singletons.hero.read();
  return {
    name: data?.name ?? "",
    role: data?.role ?? "",
    location: data?.location ?? "",
  };
}

export async function getAbout() {
  const data = await reader.singletons.about.read();
  return {
    paragraphs: [...(data?.paragraphs ?? [])],
  };
}

export async function getProjectCategories(): Promise<ProjectCategory[]> {
  const data = await reader.singletons.projects.read();
  return (data?.categories ?? []).map((category) => ({
    label: category.label,
    items: category.items.map((item) => ({
      name: item.name,
      description: item.description,
      url: item.url ?? "",
    })),
  }));
}

export async function getClients(): Promise<Client[]> {
  const data = await reader.singletons.clients.read();
  return (data?.items ?? []).map((item) => ({
    name: item.name,
    url: item.url || undefined,
  }));
}

export async function getContact() {
  const data = await reader.singletons.contact.read();
  return {
    intro: data?.intro ?? "",
    email: data?.email ?? "",
    links: (data?.links ?? []).map((link) => ({
      label: link.label,
      url: link.url ?? "",
    })),
  };
}

export async function getNews() {
  const data = await reader.singletons.news.read();
  return {
    intro: data?.intro ?? "",
    subscribeUrl: data?.subscribeUrl ?? "",
    readUrl: data?.readUrl ?? "",
  };
}

export async function getCta() {
  const data = await reader.singletons.cta.read();
  return {
    primaryLabel: data?.primaryLabel ?? "",
    secondaryLabel: data?.secondaryLabel ?? "",
    secondaryUrl: data?.secondaryUrl ?? "",
  };
}

export async function getFooter() {
  const data = await reader.singletons.footer.read();
  return {
    legalLabel: data?.legalLabel ?? "",
    legalUrl: data?.legalUrl ?? "",
  };
}
