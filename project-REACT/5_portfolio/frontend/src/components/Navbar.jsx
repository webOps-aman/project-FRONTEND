import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='navbar-section bg-[#000] w-[100%]'>
        <div className='navbar-container py-7'>
{/* -----navbar-area-start-here----- */}
            <div className='navbar-area w-[90%] mx-auto border-2 border-solid border-white '>

              <div className='myName text-white'>Amandeep Singh</div>
              <div className='menus'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className="nav-link" href="#home">Home</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link" href="#skills">Skills</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className='socialLinks'></div>
              
            </div>
{/* -----navbar-area-end-here----- */}
        </div>
      </div>
    </>
  )
}

export default Navbar