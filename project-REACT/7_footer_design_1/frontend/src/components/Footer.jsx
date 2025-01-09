import React from 'react'
import SocialLinkSection from './SocialLinkSection'
import QuickLinkSection from './QuickLinkSection'

const Footer = () => {
  return (
    <>
        <div className='main-section w-[100%] mt-80 bg-[#000] border-2 border-solid border-red-500'>
            <div className='footer-container w-[98%] h-[56vh] mx-auto border-2 border-solid border-white'>

                <QuickLinkSection/>
                <SocialLinkSection/>

            </div>
        </div>
    </>
  )
}

export default Footer