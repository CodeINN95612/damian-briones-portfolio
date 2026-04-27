import { DATA } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

export function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section id="skills" data-screen-label="Skills">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          {t.skills.eyebrow}
        </div>
        <p>{t.skills.subtitle}</p>
      </div>

      <div className="skills-body">
        {DATA.SKILL_GROUPS.map((g, i) => (
          <div key={i} className="skill-group reveal">
            <div className="skill-label">{t.skills.groups[i].label}</div>
            <div className="skill-pills">
              {g.items.map((s) => (
                <span
                  key={s}
                  className={"skill-pill" + (g.featured ? " featured" : "")}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="langs-row reveal">
          {t.profile.spokenLanguages.map((l) => (
            <div key={l.name} className="lang-item">
              <div className="lang-name">{l.name}</div>
              <div className="lang-level">{l.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
