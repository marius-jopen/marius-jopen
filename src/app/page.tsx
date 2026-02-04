import Link from "next/link";
import {
  hero,
  about,
  projects,
  clients,
  contact,
  news,
  cta,
} from "@/lib/content";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Container>
        <div className="pt-6 pb-28 md:pt-32 md:pb-32">
          {/* Hero / Header */}
          <Section>
            <h1 className="font-bold leading-tight">{hero.name}</h1>
            <p className="leading-tight">{hero.role}</p>
            <p className="leading-tight">{hero.location}</p>
            <p className="leading-tight">{hero.global}</p>
          </Section>

          {/* About / Intro */}
          <Section>
            <p className="leading-tight">{about.text}</p>
          </Section>

          {/* Selected Projects */}
          <Section>
            <SectionHeading>Selected projects:</SectionHeading>
            <div className="space-y-4 mt-2">
              {projects.map((project) => (
                <div key={project.name}>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-tight hover:opacity-60 transition-opacity"
                  >
                    {project.name}
                  </Link>
                  <p className="leading-tight italic">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Selected Clients & Collaborators */}
          <Section>
            <SectionHeading>Selected clients and collaborators:</SectionHeading>
            <p className="leading-tight mt-1">
              {clients.map((client, index) => (
                <span key={client.name}>
                  <Link
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity"
                  >
                    {client.name}
                  </Link>
                  {index < clients.length - 1 && ", "}
                </span>
              ))}
            </p>
          </Section>

          {/* Contact */}
          <Section>
            <SectionHeading>Contact:</SectionHeading>
            <p className="leading-tight mt-1">{contact.intro}</p>
            <div className="mt-4">
              <Link
                href={`mailto:${contact.email}`}
                className="leading-tight block hover:opacity-60 transition-opacity"
              >
                {contact.email}
              </Link>
              {contact.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-tight block hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Section>

          {/* News */}
          <Section>
            <SectionHeading>News:</SectionHeading>
            <p className="leading-tight mt-1">{news.intro}</p>
            <div className="mt-4">
              <Link
                href={news.readUrl}
                className="leading-tight hover:opacity-60 transition-opacity"
              >
                Read
              </Link>
              <span className="leading-tight"> / </span>
              <Link
                href={news.subscribeUrl}
                className="leading-tight hover:opacity-60 transition-opacity"
              >
                Subscribe
              </Link>
            </div>
          </Section>

        </div>
      </Container>

      {/* Fixed CTA Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 md:left-auto md:right-0 md:bottom-0 bg-white md:bg-transparent">
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <Link
            href={cta.secondaryUrl}
            className="btn inline-flex text-base items-center justify-center px-8 py-2 font-bold bg-[#d7d7d7] text-black rounded-full hover:bg-[#c7c7c7] transition-colors w-full md:w-auto"
          >
            {cta.secondaryLabel}
          </Link>
          <Link
            href={cta.primaryUrl}
            className="btn inline-flex text-base items-center justify-center px-8 py-2 font-bold bg-black text-white rounded-full hover:bg-gray-800 transition-colors w-full md:w-auto"
          >
            {cta.primaryLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
