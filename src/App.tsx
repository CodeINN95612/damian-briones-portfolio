import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
// Projects is intentionally hidden for now (stale/unfinished). Kept for future
// use — re-enable by uncommenting the import and the <Projects /> below, and
// restore the "Projects" nav link + §-code renumbering (Projects was §04).
// import { Projects } from "./sections/Projects";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { profile } from "./data";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 font-mono text-xs uppercase tracking-[0.2em] text-text-dim sm:flex-row">
          <span>End of file</span>
          <span>
            {profile.name} · {new Date().getFullYear()}
          </span>
          <span>Quito, EC</span>
        </div>
      </footer>
    </>
  );
}

export default App;
