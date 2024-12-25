import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import DarkModeButton from './DarkModeButton';

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [aboutDarkMode, setAboutDarkMode] = useState(false);
    const [servicesDarkMode, setServicesDarkMode] = useState(false);
    const [teamDarkMode, setTeamDarkMode] = useState(false);

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode);
        setAboutDarkMode(!aboutDarkMode);
        setServicesDarkMode(!servicesDarkMode);
        setTeamDarkMode(!teamDarkMode);
    }

  return (
    <>
        <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
{/* ----------navbar start here---------- */}
                {/* <nav className="navbar navbar-expand-lg fixed-top"> */}
                <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? 'dark-mode' : 'navbar-mode'}`}>
                    <div className="container">
                        <div className="offset-md-1">
                            <NavLink className="navbar-brand" to="/">Brand Name</NavLink>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 offset-md-5">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link" to="/">About</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link" to="/">Services</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link" to="/">Team</NavLink>
                                </li>
                            </ul>
                            <DarkModeButton onToggle={toggleDarkMode} />
                        </div>
                    </div>
                </nav>
{/* ----------navbar end here---------- */}
            </div>
          </div>
        </div>
      </section>
     

     {/* ----------about section start here---------- */}
        <section className={`${aboutDarkMode ? 'aboutDarkMode' : 'about-section'}`}>
            <div className="container about-container">
                <div className="row about-row ">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <h1 class="about-title">About-Section</h1>
                    </div>
                </div>
            </div>
        </section>
     {/* ----------about section end here---------- */}


     {/* ----------Services section start here---------- */}
     <section className={`${servicesDarkMode ? 'servicesDarkMode' : 'services-section'}`}>
            <div className="container services-container">
                <div className="row services-row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <h1 className="services-title">Services-Section</h1>
                    </div>
                </div>
            </div>
        </section>
     {/* ----------Services section end here---------- */}

          {/* ----------team section start here---------- */}
          <section className={`${teamDarkMode ? 'teamDarkMode' : 'team-section'}`}>
            <div className="container team-container">
                <div className="row team-row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <h1 className="team-title">Team-Section</h1>
                    </div>
                </div>
            </div>
        </section>
     {/* ----------team section end here---------- */}
    </>
  )
}

export default Navbar