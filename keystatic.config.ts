import { config, fields, singleton } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  ui: {
    brand: { name: "Marius Jopen" },
  },
  singletons: {
    site: singleton({
      label: "Site (Meta)",
      path: "src/content/site/",
      format: { data: "yaml" },
      schema: {
        title: fields.text({ label: "Title" }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
      },
    }),
    hero: singleton({
      label: "Hero",
      path: "src/content/hero/",
      format: { data: "yaml" },
      schema: {
        name: fields.text({ label: "Name" }),
        role: fields.text({ label: "Role" }),
        location: fields.text({ label: "Location" }),
      },
    }),
    about: singleton({
      label: "About",
      path: "src/content/about/",
      format: { data: "yaml" },
      schema: {
        paragraphs: fields.array(
          fields.text({ label: "Paragraph", multiline: true }),
          {
            label: "Paragraphs",
            itemLabel: (p) => p.value.slice(0, 60) || "Paragraph",
          }
        ),
      },
    }),
    projects: singleton({
      label: "Projects",
      path: "src/content/projects/",
      format: { data: "yaml" },
      schema: {
        categories: fields.array(
          fields.object({
            label: fields.text({ label: "Category Label" }),
            items: fields.array(
              fields.object({
                name: fields.text({ label: "Name" }),
                description: fields.text({
                  label: "Description",
                  multiline: true,
                }),
                url: fields.url({ label: "URL" }),
              }),
              {
                label: "Items",
                itemLabel: (p) => p.fields.name.value || "Item",
              }
            ),
          }),
          {
            label: "Categories",
            itemLabel: (p) => p.fields.label.value || "Category",
          }
        ),
      },
    }),
    clients: singleton({
      label: "Clients",
      path: "src/content/clients/",
      format: { data: "yaml" },
      schema: {
        items: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            url: fields.url({ label: "URL (optional)" }),
          }),
          {
            label: "Clients",
            itemLabel: (p) => p.fields.name.value || "Client",
          }
        ),
      },
    }),
    contact: singleton({
      label: "Contact",
      path: "src/content/contact/",
      format: { data: "yaml" },
      schema: {
        intro: fields.text({ label: "Intro", multiline: true }),
        email: fields.text({ label: "Email" }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            url: fields.url({ label: "URL" }),
          }),
          {
            label: "Social Links",
            itemLabel: (p) => p.fields.label.value || "Link",
          }
        ),
      },
    }),
    news: singleton({
      label: "Studio Log / News",
      path: "src/content/news/",
      format: { data: "yaml" },
      schema: {
        intro: fields.text({ label: "Intro", multiline: true }),
        subscribeUrl: fields.url({ label: "Subscribe URL" }),
        readUrl: fields.text({ label: "Read URL (path or full URL)" }),
      },
    }),
    cta: singleton({
      label: "CTA Buttons",
      path: "src/content/cta/",
      format: { data: "yaml" },
      schema: {
        primaryLabel: fields.text({ label: "Primary Button Label" }),
        secondaryLabel: fields.text({ label: "Secondary Button Label" }),
        secondaryUrl: fields.url({ label: "Secondary Button URL" }),
      },
    }),
    footer: singleton({
      label: "Footer",
      path: "src/content/footer/",
      format: { data: "yaml" },
      schema: {
        legalLabel: fields.text({ label: "Legal Label" }),
        legalUrl: fields.text({ label: "Legal URL" }),
      },
    }),
  },
});
