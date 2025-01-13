import React from 'react'

const HeroSection = () => {
  return (
    <>
        <div className='hero-section w-[100%] h-[87vh] mt-[1px] ' style={{backgroundImage: "url('/images/background-4.jpg')", backgroundSize: "cover", backgroundPosition: "center",  width: "100%"}}>
            <div className='main-container w-[90%] h-[100%] mx-auto border-2 border-solid border-white'>
{/* -----content-area-start-here----- */}
                <div className='content-area w-[100%] h-[100%] flex justify-between border-2 border-solid border-yellow-300'>

{/* -----content-left-start-here----- */}                 
                    <div className='info w-[55%] border-2 border-dashed border-orange-400'>
                        <p className='candidate-name text-white text-2xl font-semibold'>Hi there, I'm Amandeep Singh </p>
                        <p className='candidate-title text-5xl text-white font-bold'>Crafting Intuitive</p>
                        <p className='candidate-title text-5xl text-[#795cf7] font-bold'>Digital Experiences</p>
                        <p className='candidate-description text-lg text-white font-semibold'>
                            I specialize in building scalable and efficient web applications using the MERN stack, helping individuals and brands achieve their goals through user-focused digital solutions and interactive experiences.
                        </p>

                        <div className='button-group w-[30%] flex justify-between border-2 border-dashed border-orange-400'>
                            <div className='download-cv-div  bg-[#795cf7]'>
                                <button className='download-btn px-2'>Download CV</button>
                            </div>
                            <div className='hire-me-div  bg-[#fff]'>
                                <button className='hire-btn'>Hire Me</button>
                            </div>
                        </div>
                    </div>
{/* -----content-left-end-here----- */}

{/* -----content-right-start-here----- */}                 
<div className='info-image w-[40%] border-2 border-dashed border-orange-400'>

</div>
{/* -----content-right-end-here----- */}   

                </div>
{/* -----content-area-end-here----- */}
            </div>
        </div>
    </>
  )
}

export default HeroSection