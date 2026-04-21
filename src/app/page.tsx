import Link from "next/link";
import {
  getHero,
  getAbout,
  getProjectCategories,
  getClients,
  getContact,
  getNews,
  getCta,
  getFooter,
} from "@/lib/content";
import { EmailLink } from "@/components/EmailLink";
import { EmailButton } from "@/components/EmailButton";

// Parses markdown-style [text](url) links within a string into React elements
function RichText({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          return (
            <Link
              key={i}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              {match[1]}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
}

// Container component for consistent padding and max-width
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 md:px-8">{children}</div>
  );
}

// Section component for consistent spacing
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`mb-12 ${className}`}>{children}</section>;
}

// Section heading component
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-bold leading-tight mb-1">{children}</h2>;
}

export default async function Home() {
  const [hero, about, projectCategories, clients, contact, news, cta, footer] =
    await Promise.all([
      getHero(),
      getAbout(),
      getProjectCategories(),
      getClients(),
      getContact(),
      getNews(),
      getCta(),
      getFooter(),
    ]);

  return (
    <main className="min-h-screen bg-white text-black">
      <Container>
        <div className="pt-6 pb-4 md:pt-32 md:pb-32">
          {/* Hero / Header */}
          <Section>
            <h1 className="font-bold leading-tight">{hero.name}</h1>
            {hero.role && <p className="leading-tight">{hero.role}</p>}
            {hero.location && (
              <p className="leading-tight">{hero.location}</p>
            )}
          </Section>

          {/* About / Intro */}
          <Section>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-tight mb-4 last:mb-0">
                <RichText>{paragraph}</RichText>
              </p>
            ))}
          </Section>

          {/* Projects */}
          {projectCategories.map((category) => (
            <Section key={category.label}>
              <SectionHeading>{category.label}</SectionHeading>
              <div className="space-y-4 mt-2">
                {category.items.map((project, i) => (
                  <div key={project.name || `${category.label}-${i}`}>
                    {project.name &&
                      (project.url ? (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="leading-tight underline hover:opacity-60 transition-opacity"
                        >
                          {project.name}
                        </Link>
                      ) : (
                        <span className="leading-tight">{project.name}</span>
                      ))}
                    <p className="leading-tight italic">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          ))}

          {/* Selected Clients & Collaborators */}
          <Section>
            <SectionHeading>Clients include</SectionHeading>
            <p className="leading-tight mt-1">
              {clients.map((client, index) => (
                <span key={index}>
                  {client.url ? (
                    <Link
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60 transition-opacity"
                    >
                      {client.name}
                    </Link>
                  ) : (
                    <span>{client.name}</span>
                  )}
                  {index < clients.length - 1 && ", "}
                </span>
              ))}
            </p>
          </Section>

          {/* News */}
          <Section>
            <SectionHeading>Newsletter</SectionHeading>
            <p className="leading-tight mt-1">{news.intro}</p>
          </Section>

          {/* Contact */}
          <Section>
            <SectionHeading>Contact</SectionHeading>
            {contact.intro && (
              <p className="leading-tight mt-1">{contact.intro}</p>
            )}
            <div className="mt-4">
              {contact.email && (
                <EmailLink
                  email={contact.email}
                  className="leading-tight block hover:opacity-60 transition-opacity"
                >
                  {contact.email}
                </EmailLink>
              )}
              {contact.links.map((link) =>
                link.url ? (
                  <Link
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-tight block hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span key={link.label} className="leading-tight block">
                    {link.label}
                  </span>
                )
              )}
            </div>
          </Section>

        </div>
      </Container>

      {/* Fixed CTA Buttons */}
      {(cta.secondaryUrl || contact.email) && (
        <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 md:left-auto md:right-0 md:bottom-0 bg-white md:bg-transparent">
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            {cta.secondaryUrl && (
              <Link
                href={cta.secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex text-base items-center justify-center px-8 py-2 font-bold bg-[#d7d7d7] text-black rounded-full hover:bg-[#c7c7c7] transition-colors w-full md:w-auto"
              >
                {cta.secondaryLabel}
              </Link>
            )}
            {contact.email && (
              <EmailButton
                email={contact.email}
                label={cta.primaryLabel}
                className="btn inline-flex text-base items-center justify-center px-8 py-2 font-bold bg-black text-white rounded-full hover:bg-gray-800 transition-colors w-full md:w-auto"
              />
            )}
          </div>
        </div>
      )}

      {/* Footer Legal Link */}
      {footer.legalUrl && (
        <div className="pb-4 px-6 md:px-0 md:fixed md:bottom-3 md:left-6 pb-32 md:pb-4">
          <Link
            href={footer.legalUrl}
            className="text-xs text-gray-400 hover:opacity-60 transition-opacity"
          >
            {footer.legalLabel}
          </Link>
        </div>
      )}
    </main>
  );
}
