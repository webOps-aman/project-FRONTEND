import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className="navbar-section">
      <div className="container-fluid navbar-container">
        <div className="row navbar-row">
          <div className="col-md-12">
            {/* -- Navbar Start -- */}
            <nav className="navbar navbar-expand-lg fixed-top">
              <div className="container">
                <a className="navbar-brand" href="#home">Company Name</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 offset-md-5">
                    <li className="nav-item">
                      <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link" href="#about">About Us</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link" href="#team">Team</a>
                    </li>
                    <li className="nav-item me-2">
                      <a className="nav-link" href="#contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* -- Navbar End -- */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
