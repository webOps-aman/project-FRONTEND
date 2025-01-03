import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <>
        <section id="home" className="header-section">
            <div className="container-fluid header-container">
                <div className="row header-row">
                    <div className="col-md-7 header-col mx-auto">
                        <div className="content">
                            <h1 className="content-heading">Welcome to <span className="auto-text">Company Name Here...</span></h1>
                            <p className="content-para">We craft beautiful websites with our talented team of designers.</p>
                            <div className="get-started-div mx-auto">
                                <button type="button" className="get-started-btn">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header