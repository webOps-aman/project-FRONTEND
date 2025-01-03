import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";


function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Achievements/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
