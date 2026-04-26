import { useState } from "react";
import { DATA } from "../data";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconMail,
} from "@tabler/icons-react";

export function HeroSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = (key: string, val: string) => {
    navigator.clipboard?.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1400);
  };

  const lastExp = () => {
    const len = DATA.EXPERIENCE.length;
    return Number(DATA.EXPERIENCE[len - 1].period.split("—")[1].trim());
  };

  const yearsExp = new Date().getFullYear() - lastExp();

  return (
    <section id="top" className="hero" data-screen-label="Hero">
      <div className="hero-left">
        <div className="hero-eyebrow eyebrow reveal">
          <span className="dot" />
          {DATA.UI_CONTENT.hero.eyebrow}
        </div>

        <h1 className="reveal">
          {DATA.PROFILE.name.split(" ")[0]}{" "}
          <em>{DATA.PROFILE.name.split(" ").slice(1).join(" ")}</em>
        </h1>
        <p className="hero-title reveal">{DATA.PROFILE.title}</p>

        <div className="currently reveal">
          <div style={{ flex: 1 }}>
            <div className="currently-label">
              <span className="currently-pulse" />
              Currently focused on
            </div>
            <div className="currently-text">
              {DATA.PROFILE.currentlyExploring}
            </div>
          </div>
        </div>

        <div className="hero-meta reveal">
          <div className="meta-item">
            <div className="meta-label">Location</div>
            <div className="meta-value with-icon">
              <span className="pin" />
              {DATA.PROFILE.location}
            </div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Experience</div>
            <div className="meta-value">{yearsExp} years</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Availability</div>
            <div className="meta-value">Open to opportunities</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Languages</div>
            <div className="meta-value">EN · ES</div>
          </div>
        </div>

        <div className="hero-contacts reveal">
          <button
            className="contact-btn primary"
            onClick={() => copy("hero-email", DATA.PROFILE.contact.email)}
          >
            {copiedKey === "hero-email" ? (
              <span>
                <IconCheck /> Copied
              </span>
            ) : (
              <span>
                <IconMail size={18} />
                {DATA.PROFILE.contact.email}
              </span>
            )}
          </button>
          <a
            className="contact-btn"
            href={`https://${DATA.PROFILE.contact.linkedin}`}
            target="_blank"
            rel="noopener"
          >
            <IconBrandLinkedin size={18} />
            LinkedIn
          </a>
          <a
            className="contact-btn"
            href={`https://${DATA.PROFILE.contact.github}`}
            target="_blank"
            rel="noopener"
          >
            <IconBrandGithub size={18} />
            GitHub
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
            <img src="personal.jpg" alt="Portrait" className="portrait-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
