import React from 'react';

const About = () => {
  return (
    <>
      <div id="about" className='about-section sm:w-[100%] sm:h-[87vh] mt-2 sm:flex sm:justify-center sm:items-center'>
        <div className='about-container sm:w-[90%] sm:h-[90%]  bg-black sm:rounded-2xl'>
{/* -----about-content-start-here----- */}
            <div className='about-content-area sm:w-[100%] sm:h-[100%] mx-auto sm:rounded-2xl sm:flex sm:justify-around sm:items-center'>

                <div className='about-content-left sm:w-[20%]'>
                  <div className='about-title'>
                    <p className='text-white sm:text-8xl text-3xl text-center sm:py-0 py-4 font-bold about' >About<br/> me...</p>

                  </div>  
                </div> 

                <div className='about-content-right sm:w-[60%] flex justify-center items-center bg-gradient-to-r from-yellow-300 to-neutral-50 sm:rounded-3xl'>
                  <div className='inner-box sm:w-[99%] w-[100%] sm:p-10 p-8 sm:rounded-3xl bg-black'>
                      <div className='about-info'>
                        <p className='text-white text-3xl font-medium text-center sm:pb-6 pb-4 italic'>I can develop that help people</p>
                        <p className='text-white sm:text-2xl text-lg font-medium leading-8'>I am a Full Stack Developer with 1.5 years of experience in PHP development and a keen interest in the MERN stack. While I am a fresher in MERN, I have a solid foundation in web development and have been actively learning and building projects to strengthen my skills in React, Node.js, Express, and MongoDB. I am eager to contribute to impactful projects and grow as a MERN stack developer.</p>
                      </div>
                  </div>
                </div>       

            </div>
{/* -----about-content-end-here----- */}
        </div>
      </div>
    </>
  )
}

export default About