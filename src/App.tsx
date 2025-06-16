import "./App.css";
import { AnimatedGridMainBackground } from "./components/AnimatedGridMainBackground";
import { SectionContextProvider } from "./context/SectionContextProvider";

function App() {
  return (
    <SectionContextProvider>
      <AnimatedGridMainBackground>
        <h1>Test</h1>
      </AnimatedGridMainBackground>
    </SectionContextProvider>
  );
}

export default App;
