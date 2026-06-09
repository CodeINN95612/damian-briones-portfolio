import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";
import { contact, profile } from "../data";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { useReveal } from "../hooks/useReveal";

const channels = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: IconMail,
  },
  {
    label: "WhatsApp",
    value: contact.phone,
    href: contact.whatsapp,
    icon: IconBrandWhatsapp,
  },
  {
    label: "LinkedIn",
    value: "in/damian-briones-flachier",
    href: contact.linkedin,
    icon: IconBrandLinkedin,
  },
  {
    label: "GitHub",
    value: "CodeINN95612",
    href: contact.github,
    icon: IconBrandGithub,
  },
  {
    label: "Résumé",
    value: "Download CV (PDF)",
    href: profile.resume,
    icon: IconFileCv,
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="contact">
      <SectionHeading code="§05" eyebrow="Contact" title="Open a thread" />

      <div
        ref={ref}
        className="reveal grid items-center gap-10 rounded-xl border border-border bg-surface/60 p-7 sm:p-9 md:grid-cols-[1.2fr_1fr]"
      >
        <div>
          <p className="max-w-md text-lg leading-relaxed text-text-muted">
            {profile.closing}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/15 px-5 py-3 font-mono text-sm lowercase tracking-wider text-accent-bright transition-colors hover:bg-accent/25"
          >
            {contact.email}
            <IconArrowUpRight size={18} />
          </a>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-text-dim">
            {contact.location} · {profile.availability}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center gap-3 bg-surface px-4 py-3 transition-colors hover:bg-surface-2"
            >
              <Icon
                size={18}
                className="text-text-dim group-hover:text-accent-bright"
              />
              <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-text-dim">
                {label}
              </span>
              <span className="truncate font-mono text-sm text-text-muted group-hover:text-text">
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
