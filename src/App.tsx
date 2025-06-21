import "./App.css";
import { AnimatedGridMainBackground } from "./components/animated-ui/AnimatedGridMainBackground";
import { VentoGrid } from "./components/VentoGrid";
import { SectionContextProvider } from "./context/SectionContextProvider";

function App() {
  return (
    <SectionContextProvider>
      <AnimatedGridMainBackground>
        <VentoGrid />
        <div className="text-xs">
          <p>
            Made by <span className="italic text-teal-200">Damián Briones</span>
          </p>
        </div>
      </AnimatedGridMainBackground>
    </SectionContextProvider>
  );
}

export default App;
