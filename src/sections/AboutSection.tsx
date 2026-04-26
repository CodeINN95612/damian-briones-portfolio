import { DATA } from "../data";

export function AboutSection() {
  return (
    <section id="about" data-screen-label="About">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          {DATA.UI_CONTENT.about.eyebrow}
        </div>
        <p>{DATA.UI_CONTENT.about.subtitle}</p>
      </div>

      <div className="about-body">
        <p className="about-quote reveal">{DATA.PROFILE.tagline}</p>

        <div className="about-grid">
          <div className="about-block reveal">
            <h4>{DATA.UI_CONTENT.about.headings.about}</h4>
            <p>{DATA.PROFILE.about}</p>
          </div>
          <div className="about-block reveal">
            <h4>{DATA.UI_CONTENT.about.headings.hobbies}</h4>
            <ul className="hobby-list">
              {DATA.HOBBIES.map((h) => (
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
