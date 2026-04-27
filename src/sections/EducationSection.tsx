import { DATA } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

export function EducationSection() {
  const { t } = useLanguage();
  const items = DATA.EDUCATION;

  return (
    <section id="education" data-screen-label="Education">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          {t.education.eyebrow}
        </div>
        <p>{t.education.subtitle}</p>
      </div>

      <div className="education">
        {items.map((e, i) => {
          const te = t.education.entries[i];
          return (
            <div key={i} className="edu-item reveal">
              <div className="edu-period">
                {e.period}
                <div style={{ marginTop: 4, color: "var(--ink-faint)" }}>
                  {e.location}
                </div>
              </div>
              <div>
                <h3 className="edu-degree">{te.degree}</h3>
                <div className="edu-school">{e.school}</div>
                <p className="edu-notes">{te.notes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
