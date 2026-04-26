import { useState } from "react";
import { DATA } from "../data";

export function ContactSection() {
  const profile = DATA.PROFILE;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const items = [
    {
      key: "Email",
      val: profile.contact.email,
      copy: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
    {
      key: "Phone",
      val: profile.contact.phone,
      copy: profile.contact.phone,
      href: `tel:${profile.contact.phone.replace(/\s/g, "")}`,
    },
    {
      key: "LinkedIn",
      val: profile.contact.linkedin,
      copy: profile.contact.linkedin,
      href: `https://${profile.contact.linkedin}`,
    },
    {
      key: "GitHub",
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
          06 · Contact
        </div>
        <p>The fastest way to reach me. Click any line to copy.</p>
      </div>

      <div className="contact-block reveal">
        <div>
          <h3>
            Let's <em>talk.</em>
          </h3>
          <p className="lead">
            Although I am not currently looking for new positions, I am happy to
            chat about system design, hiring, business opportunities or anything
            in between.
          </p>
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
              <span className="ckey">{it.key}</span>
              <span className="cval">{it.val}</span>
              <span className="ccopy">
                {copiedKey === it.key ? "Copied ✓" : "Copy"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
