import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div
        id="home"
        className="hero-section w-[100%] sm:h-[87vh] mt-[93px] scroll-mt-[93px]"
        style={{
          // backgroundImage: "url('/images/background-4.jpg')",
          backgroundImage: "url('/images/background-14.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main-container sm:w-[90%] w-[95%] sm:h-[100%] mx-auto">
          {/* -----content-area-start-here----- */}
          <div className="content-area sm:w-[100%] sm:h-[100%] sm:flex sm:justify-between">
            {/* -----content-left-start-here----- */}
            <div className="info sm:w-[50%] sm:pt-36 pt-10">
              <p className="candidate-name pb-4 text-white sm:text-2xl text-lg font-semibold">
                Hi there, I'm Amandeep Singh
              </p>
              <p className="candidate-title pb-2 text-5xl text-white font-bold">
                Crafting Intuitive
              </p>
              <p className="candidate-title pb-10 text-5xl text-blue-500 font-bold">
                Digital Experiences
              </p>
              <p className="candidate-description text-lg sm:text-left text-justify text-white font-semibold">
                I specialize in building scalable and efficient web applications using the MERN stack, helping individuals and brands achieve their goals through user-focused digital solutions and interactive experiences.
              </p>

              <div className="button-group sm:w-[52%] mt-10 sm:flex sm:justify-between">
                <div className="download-cv-div rounded-lg sm:py-0 py-3">
                <a 
                href="https://github.com/webOps-aman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
                >
                <button type="button" className="w-full px-10 py-3 text-lg font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg text-center dark:hover:bg-blue-700">Github Link</button></a>

                </div>
                <div className="hire-me-div">
                  <a href="#contact">
                  <button
                    type="button"
                    className="w-full px-10 py-3 text-lg font-medium text-black bg-white hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none rounded-lg text-center"
                  >
                    Hire Me
                  </button>
                  </a>
                </div>
              </div>
            </div>
            {/* -----content-left-end-here----- */}

            {/* -----content-right-start-here----- */}
            <div className="info-image sm:w-[45%] sm:py-0 py-10 sm:flex sm:justify-center sm:items-center">
              <div className="image-div">
                <img src="/images/profile_7.png" alt="Profile" />
              </div>
            </div>
            {/* -----content-right-end-here----- */}
          </div>
          {/* -----content-area-end-here----- */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
