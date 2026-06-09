import { IconArrowUpRight } from "@tabler/icons-react";
import { certifications, education } from "../data";
import { Chip } from "../components/Chip";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function Certifications() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="certifications">
      <SectionHeading code="§04" eyebrow="Credentials" title="On the record" />

      <div ref={ref} className="reveal grid gap-10 md:grid-cols-2">
        {/* Education */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
            Education
          </p>
          {education.map((edu) => (
            <article
              key={edu.degreeTitle}
              className="rounded-xl border border-border bg-surface/60 p-5"
            >
              <h3 className="font-display text-base font-semibold text-text">
                {edu.degreeTitle}
              </h3>
              <p className="mt-0.5 text-text-muted">{edu.institution}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-text-dim">
                {edu.dateRange} · {edu.location}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {edu.topics.map((topic) => (
                  <Chip key={topic}>{topic}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
            Certifications
          </p>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="rounded-xl border border-border bg-surface/60 p-5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-text">
                    {cert.title}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-text-dim">
                    {cert.date}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-text-dim">
                  {cert.issuer}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {cert.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-text-dim">
                  {cert.credentialId && (
                    <span>
                      ID:{" "}
                      <span className="text-text-muted">
                        {cert.credentialId}
                      </span>
                    </span>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-accent-bright transition-colors hover:text-accent"
                    >
                      Verify <IconArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
