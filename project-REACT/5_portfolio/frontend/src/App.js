import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  );
}

export default App;
