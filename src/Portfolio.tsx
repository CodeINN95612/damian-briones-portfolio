import { useEffect, useState } from "react";
import { DATA } from "./data";
import { HeroSection } from "./sections/HeroSection";
import { NavBar } from "./sections/NavBar";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { EducationSection } from "./sections/EducationSection";
import { ContactSection } from "./sections/ContactSection";

export function Portfolio() {
  const navIds = DATA.UI_CONTENT.nav.map((it) => it.id);
  const [activeId, setActiveId] = useState(navIds[0]);

  // Active section tracking
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  function handleNavClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    const observeAll = () => {
      document
        .querySelectorAll(".reveal:not(.in)")
        .forEach((el) => obs.observe(el));
    };
    observeAll();
    // Re-observe newly mounted nodes (e.g. from "Show more")
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      obs.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <NavBar
        items={DATA.UI_CONTENT.nav}
        activeId={activeId}
        onNavClick={handleNavClick}
      />
      <div className="page">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
      <footer>
        <div className="foot-name">{DATA.PROFILE.name}</div>
        <div className="foot-meta">
          {DATA.PROFILE.location} · {DATA.UI_CONTENT.footer.builtYear} ·{" "}
          {DATA.PROFILE.contact.email}
        </div>
      </footer>
    </>
  );
}
