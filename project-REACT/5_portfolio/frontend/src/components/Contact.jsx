import React from 'react'

const Contact = () => {
  return (
    <>
      <div id="contact" className='contact-section sm:w-[100%] sm:h-[105vh]  sm:flex sm:justify-center sm:items-center bg-black scroll-mt-24'>
        <div className='contact-container sm:w-[90%] sm:h-[90%] bg-white sm:rounded-2xl'>
          {/* -----contact-content-start-here----- */}
          <div className='contact-content-area sm:w-[100%] sm:h-[100%] mx-auto sm:rounded-2xl'>
            <div className='contact-title my-10'>
              <p className='title text-center text-3xl pb-3 font-bold'>Get In Touch</p>
            </div>
            {/* -----grid-start-here----- */}
            <div className='contact-card-section w-[95%] mx-auto'>


            <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                    Thank you for visiting my portfolio! If you have any questions, project ideas, or collaboration opportunities, I’d love to hear from you. Feel free to reach out to me using the contact form below or drop me an email. I look forward to connecting with you!
                    </p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">New Delhi, India</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: +91 9999-728-776</p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: amanhxe@gmail.com</p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                    <form action="" method="post">

                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
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