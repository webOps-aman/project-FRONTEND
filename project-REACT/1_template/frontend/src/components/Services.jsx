import React from 'react';
import './Services.css';
import ServicesCardData from './ServicesCardData.json';

const Services = () => {
  return (
    <>
      <section id="services" className="services-section">
        <div className="container services-container">
          <div className="row services-title-row">
            <div className="col-md-12 services-title-col my-5">
              <h3 className="services-title text-center">We Provide Services</h3>
            </div>
          </div>
          <div className="row services-row">
            {ServicesCardData.map((curElem) => (
              <div className="col-md-4 my-3 services-col" data-aos="zoom-in" key={curElem.id}>
                <div className="serviceBox">
                  <div className="service-icon">
                    <span><i className={curElem.iconClass}></i></span>
                  </div>
                  <h3 className="title">{curElem.service}</h3>
                  <p className="description">{curElem.description}</p>
                  <div className='row mt-3'>
                    <div className='col-md-12 text-center price'>Price: {curElem.price}</div>
                    <div className='col-md-12 text-center provider'>Provider: {curElem.provider}</div>
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
