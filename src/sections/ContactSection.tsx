import { useState } from "react";
import { DATA } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const profile = DATA.PROFILE;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const items = [
    {
      key: "email",
      label: t.contact.labels.email,
      val: profile.contact.email,
      copy: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
    {
      key: "phone",
      label: t.contact.labels.phone,
      val: profile.contact.phone,
      copy: profile.contact.phone,
      href: `tel:${profile.contact.phone.replace(/\s/g, "")}`,
    },
    {
      key: "linkedin",
      label: t.contact.labels.linkedin,
      val: profile.contact.linkedin,
      copy: profile.contact.linkedin,
      href: `https://${profile.contact.linkedin}`,
    },
    {
      key: "github",
      label: t.contact.labels.github,
      val: profile.contact.github,
      copy: profile.contact.github,
      href: `https://${profile.contact.github}`,
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof items)[0],
  ) => {
    e.preventDefault();
    navigator.clipboard?.writeText(item.copy);
    setCopiedKey(item.key);
    setTimeout(() => setCopiedKey(null), 1400);
  };

  return (
    <section id="contact" data-screen-label="Contact">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          {t.contact.eyebrow}
        </div>
        <p>{t.contact.subtitle}</p>
      </div>

      <div className="contact-block reveal">
        <div>
          <h3>
            {t.contact.heading.split(" ").slice(0, -1).join(" ")}{" "}
            <em>{t.contact.heading.split(" ").pop()}</em>
          </h3>
          <p className="lead">{t.contact.leadText}</p>
        </div>
        <div className="contact-list">
          {items.map((it) => (
            <a
              key={it.key}
              href={it.href}
              className={
                "contact-row" + (copiedKey === it.key ? " copied" : "")
              }
              onClick={(e) => handleClick(e, it)}
              onAuxClick={() => {}}
            >
              <span className="ckey">{it.label}</span>
              <span className="cval">{it.val}</span>
              <span className="ccopy">
                {copiedKey === it.key
                  ? t.contact.copiedButton
                  : t.contact.copyButton}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
