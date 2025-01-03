import React from 'react'
import "./Achievements.css";

const Achievements = () => {
  return (
    <>
        <section id="achievements" className="achievements-section mt-5">
        <div className="container achievements-container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Our Achievements</h2>
                </div>
            </div>
            <div className="row achievements-info-row">
                <div className="col-md-8 achievements-description-col mx-auto">
                    <div className="main-timeline">
                        <div className="timeline">
                            <div className="timeline-content" data-aos="fade-right">
                                <h3 className="title">Our Achievements in Numbers</h3>
                                <p className="description">
                                    We have successfully delivered innovative software solutions across diverse industries. With numerous projects completed, satisfied clients, and a passion for technology, we empower businesses to achieve digital transformation. Our expertise in modern tools, agile methodologies, and customer-centric approaches ensures that we consistently exceed expectations and deliver exceptional results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row achievements-row mt-5 d-md-flex justify-content-md-evenly">
                <div className="col-md-2 achievements-col" data-aos="zoom-in">
                    <div className="counter-area">
                        <div className="counter counter-number" data-target="15">15</div>
                        <div className="counter-title"><p>Years of Experience</p></div>
                    </div>
                </div>
                <div className="col-md-2 achievements-col" data-aos="zoom-in">
                    <div className="counter-area">
                        <div className="counter counter-number" data-target="1256">1256</div>
                        <div className="counter-title"><p>Total Projects</p></div>
                    </div>
                </div>
                <div className="col-md-2 achievements-col" data-aos="zoom-in">
                    <div className="counter-area">
                        <div className="counter counter-number" data-target="1050">1050</div>
                        <div className="counter-title"><p>Completed Projects</p></div>
                    </div>
                </div>
                <div className="col-md-2 achievements-col" data-aos="zoom-in">
                    <div className="counter-area">
                        <div className="counter counter-number" data-target="206">206</div>
                        <div className="counter-title"><p>Active Projects</p></div>
                    </div>
                </div>
                <div className="col-md-2 achievements-col" data-aos="zoom-in">
                    <div className="counter-area">
                        <div className="counter counter-number" data-target="81">81</div>
                        <div className="counter-title"><p>Upcoming Projects</p></div>
                    </div>
                </div>
                <div className="col-md-2 achievements-col" data-aos="zoom-in">
                    <div className="counter-area">
                        <div className="counter counter-number" data-target="1029">1029</div>
                        <div className="counter-title"><p>Happy Clients</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Achievements