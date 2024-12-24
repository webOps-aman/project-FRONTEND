import {BrowserRouter, Route, Routes} from "react-router-dom";

// -----import pages start here-----

// -----import pages end here-----

import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" />
          <Route path="/about" />
          <Route path="/services" />
          <Route path="/portfolio" />
          <Route path="/team" />
          <Route path="/contact" />
         
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
