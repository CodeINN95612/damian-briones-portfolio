import { useState } from "react";
import { DATA } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 4;
  const projects = DATA.PROJECTS;
  const visible = showAll ? projects : projects.slice(0, INITIAL);
  const hidden = projects.length - INITIAL;

  return (
    <section id="projects" data-screen-label="Projects">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          {t.projects.eyebrow}
        </div>
        <p>{t.projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {visible.map((p, i) => {
          const te = t.projects.entries[i];
          return (
            <div key={p.name} className="project-card reveal">
              <div className="project-head">
                <h3 className="project-name">{p.name}</h3>
                <span className="project-arrow">↗</span>
              </div>
              <div className="project-role">{te.role}</div>
              <p className="project-blurb">{te.blurb}</p>
              <div className="project-foot">
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="stack-tag">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {p.links.map((l, li) => (
                    <a key={li} href={l.url} target="_blank" rel="noopener">
                      {te.links[li]?.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {hidden > 0 && (
        <div className="show-more-wrap" style={{ marginLeft: 0 }}>
          <button className="show-more" onClick={() => setShowAll((s) => !s)}>
            {showAll ? (
              <>
                {t.projects.showLess} <span className="sm-chev">⌃</span>
              </>
            ) : (
              <>
                {t.projects.showMore(hidden)}{" "}
                <span className="sm-chev">⌄</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
