import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="navbar-section bg-[#000] w-[100%]">
        <div className="navbar-container py-4">
          {/* -----navbar-area-start-here----- */}
          <div className="navbar-area w-[90%] mx-auto flex justify-between border-2 border-solid border-white">
            <div className="myName text-white">Amandeep Singh</div>

            <div className="menus-wrapper sm:w-[60%] w-[30%] sm:flex flex justify-center border-2 border-yellow-300 border-dashed">
              <div className="menus w-[60%] hidden sm:block border-2 border-white border-dashed">
                <ul className="navbar-nav flex justify-evenly">
                  <li className="nav-item text-white">
                    <a className="nav-link" href="#home">Home</a>
                  </li>
                  <li className="nav-item text-white">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item text-white">
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
                  <li className="nav-item text-white">
                    <a className="nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item text-white">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="socialLink w-[40%] hidden sm:block border-2 border-red-600 border-dashed">
                <ul className="navbar-nav flex justify-evenly">
                  <li className="nav-item text-white">
                    <a className="nav-link" href="https://github.com/webOps-aman" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </li>
                  <li className="nav-item text-white">
                    <a className="nav-link" href="https://www.linkedin.com/in/amandeep-singh-93739322b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                </ul>
              </div>

              <div className="toggle-button sm:hidden">
                <GiHamburgerMenu style={{ color: "white", fontSize: "24px" }} />
              </div>
            </div>
          </div>
          {/* -----navbar-area-end-here----- */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
