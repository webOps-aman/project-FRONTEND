import React from 'react';
import "./Services.css";

const Services = () => {
  return (
    <>
      <section className="services-section">
    <div className="container services-container">
        <div className="row services-title-row"> 
            <div className="col-md-12 services-title-col my-5">
                <h3 className="services-title text-center">We Provide Services</h3>
            </div>
        </div>
        <div className="row services-row mb-5">
            <div className="col-md-4 services-col" data-aos="zoom-in">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa fa-globe"></i></span>
                    </div>
                    <h3 className="title">Web Design</h3>
                    <p className="description">Creating visually appealing and responsive websites that enhance user experience, ensuring seamless navigation and optimal performance across devices.</p>
                </div>
            </div>
            <div className="col-md-4 services-col" data-aos="zoom-in">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa-solid fa-code"></i></span>
                    </div>
                    <h3 className="title">Web Development</h3>
                    <p className="description">Building custom websites with modern technologies for optimal performance, user experience, and seamless functionality across all platforms.</p>
                </div>
            </div>
            <div className="col-md-4 services-col" data-aos="zoom-in">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa-solid fa-cloud-arrow-up"></i></span>
                    </div>
                    <h3 className="title">API Development</h3>
                    <p className="description">Creating secure, scalable APIs to integrate applications, ensuring smooth data flow between systems for enhanced functionality.</p>
                </div>
            </div>
        </div>
        <div className="row services-row mb-5" data-aos="zoom-in">
            <div className="col-md-4 services-col">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa-solid fa-bullhorn"></i></span>
                    </div>
                    <h3 className="title">Digital Marketing Services</h3>
                    <p className="description">Driving brand awareness and online presence through SEO, social media, PPC, email campaigns, and targeted digital strategies.</p>
                </div>
            </div>
            <div className="col-md-4 services-col" data-aos="zoom-in">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa-solid fa-database"></i></span>
                    </div>
                    <h3 className="title">Hosting & Domain Services</h3>
                    <p className="description">Providing reliable web hosting solutions and domain registration services, ensuring fast, secure, and scalable website performance.</p>
                </div>
            </div>
            <div className="col-md-4 services-col" data-aos="zoom-in">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa-solid fa-pen"></i></span>
                    </div>
                    <h3 className="title">Content Writing & Copywriting</h3>
                    <p className="description">Crafting engaging, informative content and compelling copy that enhances brand messaging and drives audience engagement effectively.</p>
                </div>
            </div>
        </div>
        <div className="row services-row" data-aos="zoom-in">
            <div className="col-md-4 services-col">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa-brands fa-rocketchat"></i></span>
                    </div>
                    <h3 className="title">Chatbot Development</h3>
                    <p className="description">Developing AI-powered chatbots to automate customer support, improve engagement, and provide 24/7 service on your website.</p>
                </div>
            </div>
            <div className="col-md-4 services-col" data-aos="zoom-in">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa-solid fa-filter"></i></span>
                    </div>
                    <h3 className="title">Optimization Services</h3>
                    <p className="description">Enhancing website performance by improving speed, responsiveness, SEO, and usability for a better user experience and higher rankings.</p>
                </div>
            </div>
            <div className="col-md-4 services-col" data-aos="zoom-in">
                <div className="serviceBox">
                    <div className="service-icon">
                        <span><i className="fa-solid fa-headset"></i></span>
                    </div>
                    <h3 className="title">Maintenance & Support</h3>
                    <p className="description">Offering ongoing website maintenance and technical support to ensure optimal functionality, security, and up-to-date content.</p>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Services