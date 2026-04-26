import { DATA } from "../data";

export function AboutSection() {
  return (
    <section id="about" data-screen-label="About">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          01 · About
        </div>
        <p>The short version, written for humans — not for resume parsers.</p>
      </div>

      <div className="about-body">
        <p className="about-quote reveal">{DATA.PROFILE.tagline}</p>

        <div className="about-grid">
          <div className="about-block reveal">
            <h4>What I'm about</h4>
            <p>{DATA.PROFILE.about}</p>
          </div>
          <div className="about-block reveal">
            <h4>Outside of work</h4>
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
