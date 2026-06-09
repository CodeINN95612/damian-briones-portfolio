import type { ReactNode } from "react";

type LeaderFieldProps = {
  label: string;
  value: ReactNode;
  /** Extra classes for the value (e.g. a brand tint). */
  valueClassName?: string;
  className?: string;
};

/**
 * The page-wide dossier grammar: `LABEL ········ value`, aligned like a printed
 * form. The dotted leader is a plain dotted bottom-border that fills the gap.
 */
export function LeaderField({
  label,
  value,
  valueClassName = "",
  className = "",
}: LeaderFieldProps) {
  return (
    <div className={`flex items-baseline gap-3 font-mono text-sm ${className}`}>
      <span className="shrink-0 uppercase tracking-wider text-text-dim">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="min-w-6 flex-1 -translate-y-[0.3em] border-b border-dotted border-border"
      />
      <span className={`shrink-0 text-right text-text ${valueClassName}`}>
        {value}
      </span>
    </div>
  );
}
