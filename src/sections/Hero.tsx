import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";
import { contact, profile } from "../data";
import { FallbackImage } from "../components/FallbackImage";
import { LeaderField } from "../components/LeaderField";

const actions = [
  { label: "github", href: contact.github, icon: IconBrandGithub },
  { label: "linkedin", href: contact.linkedin, icon: IconBrandLinkedin },
  { label: "email", href: `mailto:${contact.email}`, icon: IconMail },
  { label: "résumé", href: profile.resume, icon: IconFileCv },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Faint ledger grid, faded toward the edges. */}
      <div
        aria-hidden="true"
        className="ledger-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black,transparent)]"
      />
      {/* Single violet glow — the only ambient color in the hero. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <div className="field-in overflow-hidden rounded-xl border border-border bg-surface/70 backdrop-blur-sm">
          {/* Card header strip */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-dim">
            <span>Personnel file</span>
            <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-accent-bright">
              REF · {profile.ref}
            </span>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-10">
            {/* Photo in a registration frame */}
            <div
              className="field-in relative mx-auto w-44 shrink-0 sm:w-52"
              style={{ animationDelay: "80ms" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface-2">
                <FallbackImage
                  src={profile.image}
                  alt={profile.name}
                  className="size-full object-cover"
                  fallback={
                    <div className="grid size-full place-items-center bg-gradient-to-br from-surface-2 to-bg">
                      <span className="font-expanded text-5xl font-bold text-text-dim">
                        {profile.initials}
                      </span>
                    </div>
                  }
                />
                {/* corner ticks */}
                <span className="absolute left-1.5 top-1.5 size-3 border-l border-t border-accent/70" />
                <span className="absolute right-1.5 top-1.5 size-3 border-r border-t border-accent/70" />
                <span className="absolute bottom-1.5 left-1.5 size-3 border-b border-l border-accent/70" />
                <span className="absolute bottom-1.5 right-1.5 size-3 border-b border-r border-accent/70" />
              </div>
              <p className="mt-2 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-dim">
                FIG.1 · ID
              </p>
            </div>

            {/* Identity + fields */}
            <div className="min-w-0">
              <p
                className="field-in font-mono text-xs uppercase tracking-[0.3em] text-accent"
                style={{ animationDelay: "120ms" }}
              >
                {profile.title}
              </p>
              <h1
                className="field-in font-expanded mt-2 text-4xl font-bold leading-[0.95] tracking-tight text-text sm:text-5xl"
                style={{ animationDelay: "160ms" }}
              >
                {profile.name}
              </h1>
              <p
                className="field-in mt-4 max-w-xl text-base leading-relaxed text-text-muted"
                style={{ animationDelay: "220ms" }}
              >
                {profile.tagline}
              </p>

              <div
                className="field-in mt-6 space-y-2.5"
                style={{ animationDelay: "300ms" }}
              >
                <LeaderField label="Role" value="Backend · Architecture" />
                <LeaderField label="Stack" value=".NET · Vue · AWS" />
                <LeaderField label="Languages" value="Español · English" />
                <LeaderField label="Based" value="Quito, EC · UTC−5" />
                <LeaderField
                  label="Status"
                  value={
                    <span className="inline-flex items-center gap-2 text-status">
                      <span className="size-2 rounded-full bg-status shadow-[0_0_8px_var(--color-status)]" />
                      Open to freelance
                    </span>
                  }
                />
              </div>

              {/* Link actions */}
              <div
                className="field-in mt-7 flex flex-wrap gap-2"
                style={{ animationDelay: "380ms" }}
              >
                {actions.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-2 font-mono text-xs lowercase tracking-wider text-text-muted transition-colors hover:border-accent/50 hover:text-text"
                  >
                    <Icon
                      size={16}
                      className="text-text-dim group-hover:text-accent-bright"
                    />
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 font-mono text-xs lowercase tracking-wider text-accent-bright transition-colors hover:bg-accent/20"
                >
                  get in touch
                  <IconArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
