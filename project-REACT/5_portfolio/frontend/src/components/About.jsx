import React from 'react';

const About = () => {
  return (
    <>
      <div
        id="about"
        className="about-section sm:w-[100%] sm:h-[87vh] scroll-mt-24 mt-2 sm:flex sm:justify-center sm:items-center"
      >
        <div className="about-container sm:w-[90%] sm:h-[90%] bg-black sm:rounded-2xl">
          {/* -----about-content-start-here----- */}
          <div className="about-content-area sm:w-[100%] sm:h-[100%] mx-auto sm:rounded-2xl sm:flex sm:justify-around sm:items-center">
            <div className="about-content-left sm:w-[20%]">
              <div className="about-title">
                <p className="text-white sm:text-8xl text-3xl text-center sm:py-0 py-4 font-bold about">
                  About
                  <br /> me...
                </p>
              </div>
            </div>

            <div className="about-content-right sm:w-[60%] flex justify-center items-center bg-gradient-to-r from-yellow-300 to-neutral-50 sm:rounded-3xl">
              <div className="inner-box sm:w-[99%] w-[100%] sm:p-10 p-8 sm:rounded-3xl bg-black">
                <div className="about-info">
                  <p className="text-white text-3xl font-medium text-center sm:pb-6 pb-4 italic">
                    I can develop that help people
                  </p>
                  <p className="text-white sm:text-2xl text-lg font-medium leading-8">
                  Seeking a MERN Stack Developer role where I can apply my skills in React, Node.js, Express, and MongoDB to build efficient and user-centric applications. With 1.7 years of experience in PHP development, specializing in scalable web applications, I have transitioned into the MERN stack driven by my passion for modern JavaScript technologies. While new to MERN, I have a strong web development foundation and have been actively working on projects to enhance my expertise. My goal is to specialize and grow exclusively in the MERN stack domain while contributing to impactful real-world applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* -----about-content-end-here----- */}
        </div>
      </div>
    </>
  );
};

export default About;
