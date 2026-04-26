import { useEffect } from "react";
import { DATA } from "./data";
import { HeroSection } from "./sections/HeroSection";
import { NavBar } from "./sections/NavBar";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

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
        items={NAV_ITEMS}
        activeId="about"
        onNavClick={(id) => console.log("Navigate to", id)}
      />
      <div className="page">
        <HeroSection />
      </div>
      <footer>
        <div className="foot-name">{DATA.PROFILE.name}</div>
        <div className="foot-meta">
          {DATA.PROFILE.location} · Built 2026 · {DATA.PROFILE.contact.email}
        </div>
      </footer>
    </>
  );
}
