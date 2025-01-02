import React from 'react';
import './About.css';
import AboutDynamicData from "./AboutDynamicData.json";

const About = () => {

  return (
    <>
      <section id="about" className="about-section">
        <div className="container about-container">
          <div className="row about-title-row"> 
            <div className="col-md-12 about-title-col my-5">
              <h3 className="about-title text-center">About Us</h3>
            </div>
          </div>
          <div className="row about-row d-md-flex justify-content-md-evenly">
            <div className="col-md-6 about-col-details" data-aos="zoom-in">
              <h3 className="about-heading">We Craft Beautiful Websites</h3>
              <p className="about-para-one">
                Our team of talented designers brings your vision to life by creating stunning, user-friendly websites. We believe that every detail matters and strive to deliver websites that not only look great but also provide an exceptional user experience. Let us help you build a digital presence that stands out.
              </p>
              <ul className="about-list">
                {AboutDynamicData.map((curElem) => (
                  <li key={curElem.id} className="about-items">
                    {curElem.paragraph}
                  </li>
                ))}
              </ul>
              <p className="about-para-two">
                With years of experience and a passion for innovation, we are committed to delivering websites that exceed your expectations. Whether you're starting from scratch or revamping an existing site, our team is here to guide you every step of the way. We take the time to understand your unique needs and tailor our designs to match your brand's identity. Our goal is not just to create beautiful websites, but also to ensure they are functional, responsive, and user-friendly. Trust us to transform your ideas into a digital masterpiece that drives results, boosts your online presence, and engages your audience in meaningful ways.
              </p>
            </div>
            <div className="col-md-6 mb-3 about-col-image" data-aos="zoom-in">
              <img
                className="img-fluid d-block d-lg-none object-fit-cover"
                src="./images/about-img.jpg"
                alt="Website design preview on mobile"
              />
              <img
                className="img-fluid d-none d-lg-block object-fit-contain"
                src="./images/about-infographic-4.png"
                alt="Website infographic on desktop"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
