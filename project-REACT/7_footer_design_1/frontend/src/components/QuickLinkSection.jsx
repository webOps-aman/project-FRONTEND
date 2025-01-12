import React from 'react'

const QuickLinkSection = () => {
  return (
    <>
        <div className='quick-links-section sm:p-10 w-[100%] sm:h-[80%]  sm:flex sm:justify-between border-2 border-dashed border-yellow-400'>
          
          <div className='company-logo sm:w-auto px-5 sm:py-0 py-3  text-center text-white border-2 border-dashed border-yellow-400'>
            <h3 className='c-name text-2xl font-bold'>XYZ Company Name...</h3>
          </div>
          <div className='product-quick-links w-auto px-5 sm:text-left text-center sm:py-0 py-3 text-white border-2 border-dashed border-yellow-400'>
            <h3 className='p-name text-2xl font-bold pb-2'>Product</h3>
            <ul className='product-links'>
              <li className='product-item leading-10 text-lg font-medium text-gray-400'>Services</li>
              <li className='product-item leading-10 text-lg font-medium text-gray-400'>About Us</li>
              <li className='product-item leading-10 text-lg font-medium text-gray-400'>News & Stories</li>
              <li className='product-item leading-10 text-lg font-medium text-gray-400'>Roadmap</li>
            </ul>
          </div>
          <div className='company-quick-links w-auto px-5 sm:text-left text-center sm:py-0 py-3 text-white border-2 border-dashed border-yellow-400'>
            <h3 className='c-quick-name text-2xl font-bold pb-2'>Company</h3>
            <ul className='company-links'>
              <li className='company-item leading-10 text-lg font-medium text-gray-400'>About Us</li>
              <li className='company-item leading-10 text-lg font-medium text-gray-400'>Jobs</li>
              <li className='company-item leading-10 text-lg font-medium text-gray-400'>Careers <span className='careers-span bg-yellow-500 rounded-xl p-2 text-white'>We're Hiring</span></li>
              <li className='company-item leading-10 text-lg font-medium text-gray-400'>Contact Us</li>
              <li className='company-item leading-10 text-lg font-medium text-gray-400'>Press</li>
            </ul>
          </div>
          <div className='stay-up-date sm:w-[40%] sm:text-left text-center sm:py-0 py-3 text-white border-2 border-dashed border-yellow-400'>
            <h3 className='up-date-name text-2xl font-bold pb-5'>STAY UP TO DATE</h3>

            <div className='subscribe-section sm:w-[550px] sm:mx-0 mx-2 sm:flex sm:justify-around p-2 bg-white rounded-lg'>

              <div className='input-div sm:w-[75%]'>
                <input type="text" id="first_name" className="bg-gray-50 py-4 font-semibold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email..." />
              </div>

              <div className='subscribe-button sm:w-auto w-[100%] sm:pt-0 pt-2'>
                <button className='bg-yellow-500 sm:w-full w-[100%] sm:h-full text-xl px-3 sm:py-0 py-1 rounded-medium text-black rounded-lg'>Subscribe</button>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default QuickLinkSection