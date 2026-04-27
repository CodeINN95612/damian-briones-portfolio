import { useEffect, useState } from "react";
import { DATA, NAV_IDS } from "./data";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { HeroSection } from "./sections/HeroSection";
import { NavBar } from "./sections/NavBar";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { EducationSection } from "./sections/EducationSection";
import { ContactSection } from "./sections/ContactSection";

function PortfolioInner() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>(NAV_IDS[0]);

  const navItems = NAV_IDS.map((id) => ({
    id,
    label: t.nav[id as keyof typeof t.nav],
  }));

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
    NAV_IDS.forEach((id) => {
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
        items={navItems}
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
          {DATA.PROFILE.location} · {t.footer.builtYear} ·{" "}
          {DATA.PROFILE.contact.email}
        </div>
      </footer>
    </>
  );
}

export function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioInner />
    </LanguageProvider>
  );
}
