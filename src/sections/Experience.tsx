import { freelance, work } from "../data";
import { Chip } from "../components/Chip";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

function EntryList() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal relative border-l border-border pl-6">
      {work.map((job) => (
        <article key={job.company} className="relative pb-10 last:pb-0">
          {/* timeline node */}
          <span
            className={`absolute -left-[1.6rem] top-1.5 size-3 rounded-full border-2 ${
              job.current
                ? "border-accent bg-accent shadow-[0_0_8px_var(--color-accent)]"
                : "border-border bg-surface"
            }`}
          />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-lg font-semibold text-text">
              {job.title}
            </h3>
            <span className="text-text-muted">· {job.company}</span>
            {job.current && (
              <span className="rounded border border-accent/40 bg-accent/10 px-1.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-accent-bright">
                Current
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-text-dim">
            {job.dateRange} · {job.location}
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">
            {job.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function Freelance() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mt-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
        Freelance · selected
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {freelance.map((job) => (
          <article
            key={job.project}
            className="rounded-xl border border-border bg-surface/60 p-5"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-display text-base font-semibold text-text">
                {job.project}
              </h3>
              <span className="font-mono text-xs text-text-dim">
                {job.duration}
              </span>
            </div>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-text-dim">
              {job.client}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {job.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="work">
      <SectionHeading code="§03" eyebrow="Work" title="Service record" />
      <EntryList />
      <Freelance />
    </Section>
  );
}
