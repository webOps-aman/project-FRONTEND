import React, { useState } from 'react';

const Education = () => {
  const [activeSection, setActiveSection] = useState('education'); // Default active section

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <div id="education" className="education-section sm:w-full sm:h-[90vh] mt-2 sm:flex sm:justify-center sm:items-center bg-black scroll-mt-24">
      <div className="education-container sm:w-[90%] sm:h-auto bg-white sm:rounded-2xl p-4">
        {/* ----- Toggle Section Start ----- */}
        <div className="toggle-area my-5 w-[90%] sm:w-[60%] py-2 flex justify-around mx-auto rounded-full bg-blue-50 shadow-2xl">
          <div
            onClick={() => handleToggle('education')}
            className={`toggle-education w-[45%] py-2 text-center rounded-full cursor-pointer ${
              activeSection === 'education' ? 'bg-black text-white' : ''
            }`}
          >
            <p className="text-lg sm:text-2xl font-bold">Education</p>
          </div>
          <div
            onClick={() => handleToggle('experience')}
            className={`toggle-experience w-[45%] py-2 text-center rounded-full cursor-pointer ${
              activeSection === 'experience' ? 'bg-black text-white' : ''
            }`}
          >
            <p className="text-lg sm:text-2xl font-bold">Experience</p>
          </div>
        </div>
        {/* ----- Toggle Section End ----- */}

        {/* ----- Grid Section Start ----- */}
        {activeSection === 'education' && (
          <div className="education-card-section w-[95%] sm:w-[95%] mx-auto bg-[#E8F9FF] rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full shadow-xl rounded-lg p-4">
                <p className="text-xl sm:text-2xl font-bold">Science Stream</p>
                <p className="text-sm sm:text-lg font-medium mt-1">Sain Dass A.S</p>
                <p className="bg-red-500 w-20 sm:w-24 mt-1 text-center text-white rounded-full">2008 - 2009</p>
                <p className="text-sm sm:text-base mt-2">
                  I completed my Senior Secondary education in Science Stream (2008-2009) from Sain Dass A.S Senior Secondary School.
                </p>
              </div>
              <div className="w-full shadow-xl rounded-lg p-4">
                <p className="text-xl sm:text-2xl font-bold">BCA</p>
                <p className="text-sm sm:text-lg font-medium mt-1">Raipur</p>
                <p className="bg-red-500 w-20 sm:w-24 mt-1 text-center text-white rounded-full">2016 - 2019</p>
                <p className="text-sm sm:text-base mt-2">
                  I completed my Bachelor of Computer Applications (BCA) from Raipur during 2016-2019, gaining in-depth knowledge of computer science concepts.
                </p>
              </div>
              <div className="w-full shadow-xl rounded-lg p-4">
                <p className="text-xl sm:text-2xl font-bold">PHP Course</p>
                <p className="text-sm sm:text-lg font-medium mt-1">Nugen</p>
                <p className="bg-red-500 w-20 sm:w-24 mt-1 text-center text-white rounded-full">2015 - 2016</p>
                <p className="text-sm sm:text-base mt-2">
                  I completed a PHP backend development course at Nugen from 2015-2016, enhancing my skills in dynamic web application development.
                </p>
              </div>
              <div className="w-full shadow-xl rounded-lg p-4">
                <p className="text-xl sm:text-2xl font-bold">MERN Full Stack Course</p>
                <p className="text-sm sm:text-lg font-medium mt-1">Dice Academy</p>
                <p className="bg-red-500 w-20 sm:w-24 mt-1 text-center text-white rounded-full">2024 - 2025</p>
                <p className="text-sm sm:text-base mt-2">
                  I completed a MERN Full Stack Development course at Dice Academy from 2024-2025, mastering modern web development technologies, API integration, and frontend design.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="experience-card-section w-[95%] sm:w-[95%] mx-auto bg-[#E8F9FF] rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full shadow-xl rounded-lg p-4">
                <p className="text-xl sm:text-2xl font-bold">Senior Customer Service Executive</p>
                <p className="text-sm sm:text-lg font-medium mt-1">Call Center</p>
                <p className="bg-red-500 w-20 sm:w-24 mt-1 text-center text-white rounded-full">2011 - 2015</p>
                <p className="text-sm sm:text-base mt-2">
                  I provided exceptional customer service, resolving issues efficiently, ensuring satisfaction, and building strong client relationships during 2011-2015.
                </p>
              </div>
              <div className="w-full shadow-xl rounded-lg p-4">
                <p className="text-xl sm:text-2xl font-bold">Computer Operator</p>
                <p className="text-sm sm:text-lg font-medium mt-1">Backend Office</p>
                <p className="bg-red-500 w-20 sm:w-24 mt-1 text-center text-white rounded-full">2021 - 2022</p>
                <p className="text-sm sm:text-base mt-2">
                  As a Computer Operator, I managed data entry, maintained records, and ensured seamless backend office operations in 2021-2022.
                </p>
              </div>
              <div className="w-full shadow-xl rounded-lg p-4">
                <p className="text-xl sm:text-2xl font-bold">Software Muffins</p>
                <p className="text-sm sm:text-lg font-medium mt-1">Php Web-Development</p>
                <p className="bg-red-500 w-20 sm:w-24 mt-1 text-center text-white rounded-full">2022 - 2024</p>
                <p className="text-sm sm:text-base mt-2">
                  At Software Muffins, I developed dynamic PHP-based web applications, ensuring robust functionality and user-friendly interfaces from 2022-2024.
                </p>
              </div>
              <div className="w-full shadow-xl rounded-lg p-4">
                <p className="text-xl sm:text-2xl font-bold">...</p>
                <p className="text-sm sm:text-lg font-medium mt-1">...</p>
                <p className="bg-red-500 w-20 sm:w-24 mt-1 text-center text-white rounded-full">.....</p>
                <p className="text-sm sm:text-base mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero iste itaque dolorem quibusdam obcaecati quod ipsa ex saepe quo error.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* ----- Grid Section End ----- */}
      </div>
    </div>
  );
};

export default Education;
