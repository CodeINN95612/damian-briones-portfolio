import { hobbies, profile, stats } from "../data";
import { icons } from "../lib/icons";
import { LeaderField } from "../components/LeaderField";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="about">
      <SectionHeading code="§01" eyebrow="Profile" title="The short version" />

      <div ref={ref} className="reveal grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-text-muted">
            {profile.bio}
          </p>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
              Off the clock
            </p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {hobbies.map((hobby) => {
                const Icon = icons[hobby.icon];
                return (
                  <li
                    key={hobby.name}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text-muted"
                  >
                    <Icon size={16} className="text-text-dim" />
                    {hobby.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Vitals — the same dossier grammar, not big-number cards. */}
        <div className="rounded-xl border border-border bg-surface/60 p-5">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-dim">
            Vitals
          </p>
          <div className="space-y-3">
            {stats.map((stat) => (
              <LeaderField
                key={stat.label}
                label={stat.label}
                value={stat.value}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
