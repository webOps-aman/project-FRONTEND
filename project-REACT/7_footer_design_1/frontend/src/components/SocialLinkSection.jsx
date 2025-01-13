import React from 'react'

const SocialLinkSection = () => {
  return (
    <>
        <div className='sm:w-[95%] sm:h-[10%] h-[20vh] sm-py-0 py-2 sm:flex sm:items-center mx-auto social-links-section'>
        <div className='w-full sm:flex sm:justify-between'>
            <div className='copyright-info sm:text-xl'>
                <p className='text-white sm:text-left text-center'>2025@Design - Aman | Terms Conditions & Policy</p>
            </div>
            <div className='social-links sm:text-xl text-white sm:w-[30%] sm:mt-0 mt-3'>
                <ul className='links flex justify-evenly'>
                    <li className='links-items'>
                        <a href="#facebook">facebook</a>
                    </li>
                    <li className='links-items'>
                        <a href="#google">google</a>
                    </li>
                    <li className='links-items'>
                        <a href="#twitter">twitter</a>
                    </li>
                    <li className='links-items'>
                        <a href="#github">github</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default SocialLinkSection