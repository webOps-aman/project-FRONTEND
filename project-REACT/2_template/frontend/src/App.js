import {BrowserRouter, Route, Routes} from "react-router-dom";

// -----import pages start here-----
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
// -----import pages end here-----

import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/achievements" element={<Achievements/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
