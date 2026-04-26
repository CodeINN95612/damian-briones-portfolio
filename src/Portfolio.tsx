import { useEffect } from "react";
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
      {/* TODO: Implement navigation logic */}
      <NavBar
        items={DATA.UI_CONTENT.nav}
        activeId="about"
        onNavClick={(id) => console.log("Navigate to", id)}
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
