import { useState } from "react";
import { DATA } from "../data";

const jobs = DATA.EXPERIENCE;

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 4;
  const visible = showAll ? jobs : jobs.slice(0, INITIAL);
  const hidden = jobs.length - INITIAL;

  return (
    <section id="experience" data-screen-label="Experience">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          {DATA.UI_CONTENT.experience.eyebrow}
        </div>
        <p>{DATA.UI_CONTENT.experience.subtitle}</p>
      </div>

      <div className="timeline">
        {visible.map((j, i) => {
          return (
            <div key={i} className={"job reveal open"}>
              <div className="job-period">
                {j.period}
                <span className="job-loc">{j.location}</span>
              </div>
              <div>
                <div className="job-head">
                  <h3 className="job-role">
                    {j.role} <span className="at">at</span>{" "}
                    <span className="company">{j.company}</span>
                  </h3>
                </div>
                <p className="job-summary">{j.summary}</p>
                <div className="job-detail">
                  <div className="job-detail-inner">
                    <ul className="job-bullets">
                      {j.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                    <div className="job-stack">
                      {j.stack.map((s) => (
                        <span key={s} className="stack-tag">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {hidden > 0 && (
          <div className="show-more-wrap">
            <button className="show-more" onClick={() => setShowAll((s) => !s)}>
              {showAll ? (
                <>
                  Show less <span className="sm-chev">⌃</span>
                </>
              ) : (
                <>
                  Show {hidden} more {hidden === 1 ? "role" : "roles"}{" "}
                  <span className="sm-chev">⌄</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
