import { useState } from "react";
import { DATA } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

type NavBarProps = {
  items: { id: string; label: string }[];
  activeId: string;
  onNavClick: (id: string) => void;
};

export function NavBar({ items, activeId, onNavClick }: NavBarProps) {
  const { t, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="dot" />
        {DATA.PROFILE.name}
        <button className="lang-btn" onClick={toggle} aria-label="Switch language">
          {t.langToggle}
        </button>
      </div>
      <div className="topbar-links">
        {items.map((it) => (
          <button
            key={it.id}
            className={activeId === it.id ? "active" : ""}
            onClick={() => onNavClick(it.id)}
          >
            {it.label}
          </button>
        ))}
      </div>
      <button
        className="topbar-burger"
        aria-label={t.navMenuAriaLabel}
        onClick={() => setOpen((o) => !o)}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2 4h12M2 8h12M2 12h12" />
        </svg>
      </button>
      <div className={"topbar-mobile" + (open ? " open" : "")}>
        {items.map((it) => (
          <button
            key={it.id}
            className={activeId === it.id ? "active" : ""}
            onClick={() => {
              onNavClick(it.id);
              setOpen(false);
            }}
          >
            {it.label}
          </button>
        ))}
      </div>
    </header>
  );
}
