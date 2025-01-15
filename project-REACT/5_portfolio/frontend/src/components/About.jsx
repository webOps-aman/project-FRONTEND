import React from 'react'

const About = () => {
  return (
    <>
      <div id="about" className='about-section w-[100%] h-[87vh] mt-[1px] flex justify-center items-center' style={{backgroundImage: "url('/images/background-10.jpg')", backgroundSize: "cover", backgroundPosition: "center",  width: "100%"}}>
        <div className='about-container w-[90%] h-[90%]  bg-black rounded-2xl'>
{/* -----about-content-start-here----- */}
            <div className='about-content-area w-[95%] h-[100%] mx-auto rounded-2xl flex justify-around items-center border-2 border-solid border-white'>

                <div className='about-content-left w-[40%]'>
                  <div className='about-title'>
                    <p className='text-white text-9xl font-bold about' >About</p>
                    <p className='text-white text-9xl font-bold'>me...</p>
                  </div>  
                </div> 

                <div className='about-content-right w-[40%]'>
                  <div className='about-details'>
                    <p className='text-white text-2xl'>
                      I am a Full Stack Developer with 1.5 years of experience in PHP development and a keen interest in the MERN stack. While I am a fresher in MERN, I have a solid foundation in web development and have been actively learning and building projects to strengthen my skills in React, Node.js, Express, and MongoDB. I am eager to contribute to impactful projects and grow as a MERN stack developer.
                    </p>
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