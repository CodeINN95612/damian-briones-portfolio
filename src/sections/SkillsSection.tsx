import { DATA } from "../data";

export function SkillsSection() {
  return (
    <section id="skills" data-screen-label="Skills">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          02 · Skills
        </div>
        <p>
          Technologies I use day-to-day or have used extensively in the past,
          plus a few I'm currently exploring.
        </p>
      </div>

      <div className="skills-body">
        {DATA.SKILL_GROUPS.map((g) => (
          <div key={g.label} className="skill-group reveal">
            <div className="skill-label">{g.label}</div>
            <div className="skill-pills">
              {g.items.map((s) => (
                <span
                  key={s}
                  className={
                    "skill-pill" +
                    (g.label === "Currently learning" ? " featured" : "")
                  }
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="langs-row reveal">
          {DATA.PROFILE.spokenLanguages.map((l) => (
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
