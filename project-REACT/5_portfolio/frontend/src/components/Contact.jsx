import React from 'react'

const Contact = () => {
  return (
    <>
      <div id="contact" className='contact-section sm:w-[100%] sm:h-[105vh] mt-2 sm:flex sm:justify-center sm:items-center bg-black scroll-mt-24'>
        <div className='contact-container sm:w-[90%] sm:h-[90%] bg-white sm:rounded-2xl'>
          {/* -----contact-content-start-here----- */}
          <div className='contact-content-area sm:w-[100%] sm:h-[100%] mx-auto sm:rounded-2xl'>
            <div className='contact-title my-10'>
              <p className='title text-center text-3xl pb-3 font-bold'>My contact</p>
              <p className='tagline text-center text-lg font-semibold'>I create responsive and user-friendly websites that turn complex ideas into easy digital solutions.</p>
            </div>
            {/* -----grid-start-here----- */}
            <div className='contact-card-section w-[95%] mx-auto'>
              <div className='sm:grid sm:grid-rows-2 sm:grid-cols-7 grid grid-cols-1'>
                <div className='html card sm:w-40 w-44 my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML logo"/>
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>HTML</p>
                </div>
                <div className='css card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>CSS</p>
                </div>
                <div className='bootstrap card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap logo" />
                  <p className='language-name text-[#6e4df3] text-center text-xl pt-5 font-bold'>Bootstrap</p>
                </div>
                <div className='tailwind card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwindcss logo" />
                  <p className='language-name text-[#6e4df3] text-center text-xl pt-5 font-bold'>Tailwind CSS</p>
                </div>
                <div className='js card sm:w-40 w-44  my-4 border-2 p-3 sm:mx-0 mx-auto shadow-2xl border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>JavaScript</p>
                </div>
                <div className='react card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>React</p>
                </div>
                <div className='node card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node js logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>Node Js</p>
                </div>
                <div className='mongoDB card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>MongoDB</p>
                </div>
                <div className='express card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>Express</p>
                </div>
                <div className='sql card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>SQL</p>
                </div>
                <div className='typescript card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>TypeScript</p>
                </div>
                <div className='php card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>PHP</p>
                </div>
                <div className='jquery card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" alt="jQuery logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>jQuery</p>
                </div>
                <div className='canva card sm:w-40 w-44  my-4 p-3 sm:mx-0 mx-auto shadow-2xl border-2 border-solid border-black rounded-2xl'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva logo" />
                  <p className='language-name text-[#6e4df3] text-center pt-5 text-xl font-bold'>Canva</p>
                </div>
              </div>
            </div>
            {/* -----grid-end-here----- */}
          </div>
          {/* -----contact-content-end-here----- */}
        </div>
      </div>
    </>
  )
}

export default Contact