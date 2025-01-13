import React from 'react'
import SocialLinkSection from './SocialLinkSection'
import QuickLinkSection from './QuickLinkSection'

const Footer = () => {
  return (
    <>
        <div className='main-section sm:w-[100%] sm:mt-96 bg-[#000]'>
            <div className='footer-container sm:w-[98%] sm:h-[57.8vh] mx-auto'>

                <QuickLinkSection/>
                <SocialLinkSection/>

            </div>
        </div>
    </>
  )
}

export default Footer