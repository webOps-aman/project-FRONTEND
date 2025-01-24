import React from 'react'

const Education = () => {

  

  const eduToggle = () => {
    alert("hello Education section");
  }

  const expToggle = () => {
    alert("hello Experience section");
  }

  return (
    <>
        <div id="education" className='education-section sm:w-[100%] sm:h-[105vh] mt-2 sm:flex sm:justify-center sm:items-center bg-black scroll-mt-24'>
        <div className='education-container sm:w-[90%] sm:h-[90%] bg-white sm:rounded-2xl'>
          {/* -----education-content-start-here----- */}
          <div className='education-content-area sm:w-[100%] sm:h-[100%] mx-auto sm:rounded-2xl'>
{/* -----toggle-area-start-here----- */}
                <div className='toggle-area my-10 w-[60%] py-2 flex justify-around mx-auto rounded-full bg-blue-50 shadow-2xl border-2 border-dashed border-black'>
                    <div onClick={eduToggle} className={`toggle-education w-[45%] py-2 text-center rounded-full bg-black text-white cursor-pointer border-2 border-dashed border-red-600`}>
                      <p className='text-2xl font-bold'>Education</p>
                    </div>
                    <div onClick={expToggle} className={`toggle-experience w-[45%] py-2 text-center rounded-full hover:bg-black hover:text-white duration-500 cursor-pointer border-2 border-dashed border-red-600`}>
                      <p className='text-2xl font-bold'>Experience</p>
                    </div>
                </div>
{/* -----toggle-area-end-here----- */}  
            {/* -----grid-start-here----- */}
            <div className='education-card-section w-[80%] mx-auto bg-[#E8F9FF] border-2 border-solid border-red-500'>
              <div className='grid grid-rows-2 grid-cols-2 p-5'>

                  <div className='w-[95%] my-2 border-2 border-solid border-red-500'>
                    <p className='text-2xl mt-2 mx-6 font-bold'>Science Stream</p>
                    <p className='text-lg mt-1 mx-6 font-medium'>Sain Dass A.S</p>
                    <p className='bg-red-500 w-24 mt-1 ml-6 text-center text-white'>2008 - 2009</p>
                    <p className='mt-2 mx-6'>I completed my Senior Secondary education in Science Stream (2008-2009) from Sain Dass A.S Senior Secondary School.</p>
                  </div>
                  <div className='w-[95%] my-2 border-2 border-solid border-red-500'>
                    <p className='text-2xl mt-2 mx-6 font-bold'>BCA</p>
                    <p className='text-lg mt-1 mx-6 font-medium'>Raipur</p>
                    <p className='bg-red-500 w-24 mt-1 ml-6 text-center text-white'>2016 - 2019</p>
                    <p className='mt-2 mx-6'>I completed my Bachelor of Computer Applications (BCA) from Raipur during 2016-2019, gaining in-depth knowledge of computer science concepts.</p>
                  </div>
                  <div className='w-[95%] my-2 border-2 border-solid border-red-500'>
                    <p className='text-2xl mt-2 mx-6 font-bold'>PHP Course</p>
                    <p className='text-lg mt-1 mx-6 font-medium'>Nugen</p>
                    <p className='bg-red-500 w-24 mt-1 ml-6 text-center text-white'>2015 - 2016</p>
                    <p className='mt-2 mx-6'>I completed a PHP backend development course at Nugen from 2015-2016, enhancing my skills in dynamic web application development.</p>
                  </div>
                  <div className='w-[95%] my-2 border-2 border-solid border-red-500'>
                    <p className='text-2xl mt-2 mx-6 font-bold'>MERN Full Stack Course</p>
                    <p className='text-lg mt-1 mx-6 font-medium'>Dice Academy</p>
                    <p className='bg-red-500 w-24 mt-1 ml-6 text-center text-white'>2024 - 2025</p>
                    <p className='mt-2 mx-6'>I completed a MERN Full Stack Development course at Dice Academy from 2024-2025, mastering modern web development technologies, API integration, and frontend design.</p>
                  </div>

              </div>
            </div>
            {/* -----grid-end-here----- */}
          </div>
          {/* -----education-content-end-here----- */}
        </div>
      </div>
    </>
  )
}

export default Education