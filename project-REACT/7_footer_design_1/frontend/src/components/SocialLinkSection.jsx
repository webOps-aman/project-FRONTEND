import React from 'react'

const SocialLinkSection = () => {
  return (
    <>
        <div className='social-links-section'>
        <div className='sm:flex sm:justify-between border-2 border-yellow-400 border-solid'>
            <div className='copyright-info'>
                <p className='text-white '>2025@Design - Aman | Terms Conditions & Policy</p>
            </div>
            <div className='social-links text-white w-[30%] border-2 border-solid border-white'>
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