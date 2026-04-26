import { DATA } from "../data";

export function EducationSection() {
  const items = DATA.EDUCATION;
  return (
    <section id="education" data-screen-label="Education">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          05 · Education
        </div>
        <p>Formal training. The rest came from shipping.</p>
      </div>

      <div className="education">
        {items.map((e, i) => (
          <div key={i} className="edu-item reveal">
            <div className="edu-period">
              {e.period}
              <div style={{ marginTop: 4, color: "var(--ink-faint)" }}>
                {e.location}
              </div>
            </div>
            <div>
              <h3 className="edu-degree">{e.degree}</h3>
              <div className="edu-school">{e.school}</div>
              <p className="edu-notes">{e.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
