import { useState } from "react";
import { DATA } from "../data";

const projects = DATA.PROJECTS;

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 4;
  const visible = showAll ? projects : projects.slice(0, INITIAL);
  const hidden = projects.length - INITIAL;

  return (
    <section id="projects" data-screen-label="Projects">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          04 · Projects
        </div>
        <p>
          Side projects and explorations. Most are open for you to look into.
        </p>
      </div>

      <div className="projects-grid">
        {visible.map((p) => (
          <div key={p.name} className="project-card reveal">
            <div className="project-head">
              <h3 className="project-name">{p.name}</h3>
              <span className="project-arrow">↗</span>
            </div>
            <div className="project-role">{p.role}</div>
            <p className="project-blurb">{p.blurb}</p>
            <div className="project-foot">
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span key={s} className="stack-tag">
                    {s}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {p.links.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" rel="noopener">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {hidden > 0 && (
        <div className="show-more-wrap" style={{ marginLeft: 0 }}>
          <button className="show-more" onClick={() => setShowAll((s) => !s)}>
            {showAll ? (
              <>
                Show less <span className="sm-chev">⌃</span>
              </>
            ) : (
              <>
                Show {hidden} more {hidden === 1 ? "project" : "projects"}{" "}
                <span className="sm-chev">⌄</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
