import { skills } from "../data";
import { icons } from "../lib/icons";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="stack">
      <SectionHeading code="§02" eyebrow="Stack" title="Tools of record" />

      <div
        ref={ref}
        className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"
      >
        {skills.map((skill) => {
          const Icon = icons[skill.icon];
          return (
            <div
              key={skill.name}
              className="group flex items-center gap-4 bg-surface p-5 transition-colors hover:bg-surface-2"
            >
              <Icon
                size={32}
                className={`${skill.tint} opacity-80 transition-opacity group-hover:opacity-100`}
                stroke={1.5}
              />
              <div className="min-w-0">
                <p className="truncate font-display text-base font-semibold text-text">
                  {skill.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-text-dim">
                  {skill.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
