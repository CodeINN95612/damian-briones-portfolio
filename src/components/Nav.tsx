import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { profile } from "../data";

const links = [
  { id: "about", label: "Profile" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["about", "stack", "work", "certifications", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* File header: monogram + label */}
        <a
          href="#hero"
          className="flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="grid size-8 place-items-center border border-border bg-surface font-expanded text-sm font-bold text-text">
            {profile.initials}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-text-dim sm:inline">
            Personnel file
          </span>
        </a>

        {/* Desktop tabs */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                active === link.id
                  ? "text-accent-bright"
                  : "text-text-dim hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-accent-bright transition-colors hover:bg-accent/20"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-text md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-2 py-2 font-mono text-sm uppercase tracking-wider ${
                    active === link.id
                      ? "text-accent-bright"
                      : "text-text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
