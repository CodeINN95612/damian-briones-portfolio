import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Consistent section rhythm in one place — avoids dueling margin rules. */
export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl px-6 py-20 sm:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
