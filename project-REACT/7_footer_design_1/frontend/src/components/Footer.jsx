import React from 'react'
import SocialLinkSection from './SocialLinkSection'
import QuickLinkSection from './QuickLinkSection'

const Footer = () => {
  return (
    <>
        <div className='main-section sm:w-[100%] sm:mt-80 bg-[#000] border-2 border-solid border-red-500'>
            <div className='footer-container sm:w-[98%] sm:h-[56vh] mx-auto border-2 border-solid border-white'>

                <QuickLinkSection/>
                <SocialLinkSection/>

            </div>
        </div>
    </>
  )
}

export default Footer