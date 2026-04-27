import { useState } from "react";
import { DATA } from "../data";
import { useLanguage } from "../i18n/LanguageContext";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconDownload,
  IconMail,
} from "@tabler/icons-react";

export function HeroSection() {
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = (key: string, val: string) => {
    navigator.clipboard?.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1400);
  };

  const yearsExp = DATA.PROFILE.yearsExp;

  return (
    <section id="top" className="hero" data-screen-label="Hero">
      <div className="hero-left">
        <div className="hero-eyebrow eyebrow reveal">
          <span className="dot" />
          {t.hero.eyebrow}
        </div>

        <h1 className="reveal">
          {DATA.PROFILE.name.split(" ")[0]}{" "}
          <em>{DATA.PROFILE.name.split(" ").slice(1).join(" ")}</em>
        </h1>
        <p className="hero-title reveal">{t.profile.title}</p>

        <div className="currently reveal">
          <div style={{ flex: 1 }}>
            <div className="currently-label">
              <span className="currently-pulse" />
              {t.hero.currentlyFocused}
            </div>
            <div className="currently-text">{t.profile.currentlyExploring}</div>
          </div>
        </div>

        <div className="hero-meta reveal">
          <div className="meta-item">
            <div className="meta-label">{t.hero.metaLocation}</div>
            <div className="meta-value with-icon">
              <span className="pin" />
              {DATA.PROFILE.location}
            </div>
          </div>
          <div className="meta-item">
            <div className="meta-label">{t.hero.metaExperience}</div>
            <div className="meta-value">
              {yearsExp} {t.hero.years}
            </div>
          </div>
          <div className="meta-item">
            <div className="meta-label">{t.hero.metaAvailability}</div>
            <div className="meta-value">{t.hero.openToOpportunities}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">{t.hero.metaLanguages}</div>
            <div className="meta-value">{t.hero.langIndicator}</div>
          </div>
        </div>

        <div className="hero-contacts reveal">
          <button
            className="contact-btn primary"
            onClick={() => copy("hero-email", DATA.PROFILE.contact.email)}
          >
            {copiedKey === "hero-email" ? (
              <span>
                <IconCheck /> {t.hero.copied}
              </span>
            ) : (
              <span>
                <IconMail size={18} />
                {DATA.PROFILE.contact.email}
              </span>
            )}
          </button>
          <a
            className="contact-btn cv"
            href="CV.pdf"
            download="Damian-Briones-CV.pdf"
          >
            <IconDownload size={18} />
            {t.hero.downloadCV}
          </a>
          <a
            className="contact-btn"
            href={`https://${DATA.PROFILE.contact.linkedin}`}
            target="_blank"
            rel="noopener"
          >
            <IconBrandLinkedin size={20} />
          </a>
          <a
            className="contact-btn"
            href={`https://${DATA.PROFILE.contact.github}`}
            target="_blank"
            rel="noopener"
          >
            <IconBrandGithub size={20} />
          </a>
        </div>
      </div>

      <div className="hero-right reveal">
        <div className="portrait-frame">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <div className="portrait-glyph">
            <img
              src="personal.jpg"
              alt={t.hero.portraitAlt}
              className="portrait-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
