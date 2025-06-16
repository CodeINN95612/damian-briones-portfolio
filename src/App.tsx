import "./App.css";
import { AnimatedGridMainBackground } from "./components/AnimatedGridMainBackground";
import { VentoGrid } from "./components/VentoGrid";
import { SectionContextProvider } from "./context/SectionContextProvider";

function App() {
  return (
    <SectionContextProvider>
      <AnimatedGridMainBackground>
        <VentoGrid />
      </AnimatedGridMainBackground>
    </SectionContextProvider>
  );
}

export default App;
