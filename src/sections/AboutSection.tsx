import { DATA } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" data-screen-label="About">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          {t.about.eyebrow}
        </div>
        <p>{t.about.subtitle}</p>
      </div>

      <div className="about-body">
        <p className="about-quote reveal">{t.profile.tagline}</p>

        <div className="about-grid">
          <div className="about-block reveal">
            <h4>{t.about.aboutHeading}</h4>
            <p>{t.profile.about}</p>
          </div>
          <div className="about-block reveal">
            <h4>{t.about.hobbiesHeading}</h4>
            <ul className="hobby-list">
              {t.hobbies.map((h) => (
                <li key={h.label}>
                  <span className="hobby-name">{h.label}</span>
                  <span>{h.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
