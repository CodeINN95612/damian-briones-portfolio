import { useState } from "react";
import { DATA } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 4;
  const jobs = DATA.EXPERIENCE;
  const visible = showAll ? jobs : jobs.slice(0, INITIAL);
  const hidden = jobs.length - INITIAL;

  return (
    <section id="experience" data-screen-label="Experience">
      <div className="section-head">
        <div className="eyebrow">
          <span className="dot" />
          {t.experience.eyebrow}
        </div>
        <p>{t.experience.subtitle}</p>
      </div>

      <div className="timeline">
        {visible.map((j, i) => {
          const te = t.experience.entries[i];
          return (
            <div key={i} className={"job reveal open"}>
              <div className="job-period">
                {j.period}
                <span className="job-loc">{j.location}</span>
              </div>
              <div>
                <div className="job-head">
                  <h3 className="job-role">
                    {j.role} <span className="at">{t.experience.at}</span>{" "}
                    <span className="company">{j.company}</span>
                  </h3>
                </div>
                <p className="job-summary">{te.summary}</p>
                <div className="job-detail">
                  <div className="job-detail-inner">
                    <ul className="job-bullets">
                      {te.bullets.map((b, bi) => (
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
                  {t.experience.showLess} <span className="sm-chev">⌃</span>
                </>
              ) : (
                <>
                  {t.experience.showMore(hidden)}{" "}
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
