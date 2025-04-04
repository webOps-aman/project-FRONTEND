import React from 'react'

const SocialLinkSection = () => {
  return (
    <>
        <div className='sm:w-[95%] sm:h-[10%] h-[20vh] sm-py-0 py-2 sm:flex sm:items-center mx-auto social-links-section'>
        <div className='w-full sm:flex sm:justify-between'>
            <div className='copyright-info sm:text-xl'>
                <p className='text-black sm:text-left text-center'>2025@Design & Developed By - Amandeep Singh</p>
            </div>
            <div className='social-links sm:text-xl text-black sm:w-[30%] sm:mt-0 mt-3'>
                <ul className='links flex justify-evenly'>
                    <li className='links-items'>
                        <a
                        className="nav-link"
                        href="https://github.com/webOps-aman"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className='links-items'>
                        <a
                        className="nav-link"
                        href="https://www.linkedin.com/in/amandeep-singh-93739322b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default SocialLinkSection