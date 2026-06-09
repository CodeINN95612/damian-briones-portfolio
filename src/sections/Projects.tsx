// NOTE: Not currently rendered (hidden from App.tsx — projects were stale).
// Kept for future use. Re-enable in App.tsx and the Nav, and renumber this
// section back to §04. Project data lives in src/data (the `projects` export).
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import { projects } from "../data";
import { Chip } from "../components/Chip";
import { FallbackImage } from "../components/FallbackImage";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="projects">
      <SectionHeading code="§04" eyebrow="Projects" title="Case files" />

      <div
        ref={ref}
        className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface/60 transition-colors hover:border-accent/40"
          >
            {/* Thumbnail / placeholder */}
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
              <FallbackImage
                src={project.image}
                alt={project.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                fallback={
                  <div className="ledger-grid grid size-full place-items-center bg-surface-2">
                    <span className="font-expanded text-2xl font-bold text-text-dim">
                      {project.title}
                    </span>
                  </div>
                }
              />
              <span
                className={`absolute right-2 top-2 rounded border px-1.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider backdrop-blur-sm ${
                  project.status === "shipped"
                    ? "border-status/40 bg-status/10 text-status"
                    : "border-accent/40 bg-accent/10 text-accent-bright"
                }`}
              >
                {project.status === "shipped" ? "Shipped" : "In dev"}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-semibold text-text">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4 font-mono text-xs lowercase tracking-wider">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-text"
                  >
                    <IconBrandGithub size={15} /> code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-bright transition-colors hover:text-accent"
                  >
                    {project.liveLabel ?? "Live"} <IconArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
