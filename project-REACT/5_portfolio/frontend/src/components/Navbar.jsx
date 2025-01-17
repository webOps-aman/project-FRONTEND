import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Navbar Section */}
      <div className="navbar-section bg-[#000] w-[100%] fixed top-0">
        <div className="navbar-container py-8">
          {/* Navbar Area */}
          <div className="navbar-area w-[90%] mx-auto flex justify-between">
            <div className="myName text-white">
              <p className="text-xl font-bold">Portfolio</p>
            </div>

            <div className="menus-wrapper sm:w-[60%] w-[30%] flex justify-center">
              {/* Main Menu */}
              <div className="menus w-[60%] hidden sm:block text-xl font-semibold">
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

              {/* Social Links */}
              <div className="socialLink w-[40%] hidden sm:block text-lg font-semibold">
                <ul className="navbar-nav flex justify-evenly text-xl">
                  <li className="nav-item text-white">
                    <a
                      className="nav-link"
                      href="https://github.com/webOps-aman"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="nav-item text-white">
                    <a
                      className="nav-link"
                      href="https://www.linkedin.com/in/amandeep-singh-93739322b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Toggle Button for Mobile */}
              <div className="toggle-button sm:hidden">
                {open ? (
                  <ImCross
                    style={{
                      color: "white",
                      fontSize: "18px",
                      marginTop: "5px",
                    }}
                    onClick={() => setOpen(false)}
                  />
                ) : (
                  <GiHamburgerMenu
                    style={{ color: "white", fontSize: "24px" }}
                    onClick={() => setOpen(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Navbar Section */}
      <div
        className={`side-navbar-section fixed top-0 left-0  w-40 h-screen bg-black text-white duration-700 transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="sidebar-menu-container">

          {/* <div className="myName w-20 text-white my-4">
            <p className="text-lg font-semibold">Amandeep singh</p>
          </div> */}
          <p className="text-lg font-semibold w-full text-center text-white my-4">Amandeep singh</p>
          <ul className="flex flex-col items-center gap-6">
            <li className="nav-item text-white  cursor-pointer hover:bg-light-white rounded-md">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item text-white">
              <a
                className="nav-link"
                href="https://github.com/webOps-aman"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item text-white">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/amandeep-singh-93739322b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
