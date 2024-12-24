import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
        <section className='navbar-section'>
        <div className='container-fluid navbar-container'>
          <div className='row navbar-row'>
            <div className='col-md-12'>
{/* ----------navbar start here---------- */}
                <nav className="navbar navbar-expand-lg  fixed-top">
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
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link" to="/team">Team</NavLink>
                                </li>
                                <li className="nav-item me-2">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
{/* ----------navbar end here---------- */}
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default Navbar