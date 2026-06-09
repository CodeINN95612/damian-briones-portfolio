import { useReveal } from "../hooks/useReveal";

type SectionHeadingProps = {
  /** File section code, e.g. "§01". */
  code: string;
  /** Mono eyebrow, e.g. "PROFILE". */
  eyebrow: string;
  title: string;
};

export function SectionHeading({ code, eyebrow, title }: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mb-10">
      <div className="font-mono text-xs uppercase tracking-[0.25em]">
        <span className="text-accent">{code}</span>{" "}
        <span className="text-text-dim">/ {eyebrow}</span>
      </div>
      <h2 className="font-expanded mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
