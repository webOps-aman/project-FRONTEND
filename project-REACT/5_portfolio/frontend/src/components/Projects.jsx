import React from 'react'
import { myProjects } from '../api/myProjects'

const Projects = () => {
  return (
    <>
      <div id="projects" className='project-section sm:w-[100%] sm:h-[87vh] mt-2 sm:flex sm:justify-center sm:items-center bg-white scroll-mt-24' >
        <div className='project-container sm:w-[90%] sm:h-[95%] bg-black sm:rounded-2xl'>
          {/* -----project-content-start-here----- */}
          <div className='project-content-area sm:w-[100%] sm:h-[100%] mx-auto sm:rounded-2xl'>
            <div className='project-title my-6 sm:py-0 pt-5 text-white'>
              <p className='title text-center sm:text-3xl text-2xl font-bold'>Projects & Assignments</p>
            </div>
            <div className="w-[98%] download-cv-div rounded-lg sm:py-0 my-2 text-right lg:block hidden">
            <button
  type="button"
  className="px-10 py-3 text-lg font-medium text-black bg-white focus:outline-none rounded-lg text-center shake-x"
>
  View All
</button>

            </div>
            {/* -----grid-start-here----- */}
            <div className='project-card-section w-[95%] mx-auto'>
              <div className='sm:grid sm:grid-rows-2 sm:grid-cols-3 grid grid-cols-1'>
{/* -----project-card-start-here----- */}
            {myProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="w-[95%] sm:mb-0 mb-5 mx-auto flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <img 
                className="w-full h-auto rounded-t-xl" 
                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" 
                alt="Beautiful landscape with mountains and sunset"
              />
              <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.name}</h3>
                  <p className="mt-1 text-gray-500 dark:text-neutral-400">
                    {project.description}
                  </p>
                  
                  <div className='w-[200px] button-group flex justify-between'>
                    <div className='live-demo-div'>
                      <button className='mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'>Live Demo</button>
                    </div>
                    <div className='github-div'>
                      <button className='mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'>Github Link</button>
                    </div>
                  </div>
                </div>
            </div>
            ))}
              
{/* -----project-card-end-here----- */}
              </div>

              <div className="w-[98%] download-cv-div rounded-lg sm:py-0 py-5 text-center lg:hidden block">
              <button
  type="button"
  className="px-10 py-3 text-lg font-medium text-black bg-white focus:outline-none rounded-lg text-center shake-x"
>
  View All
</button>
              </div>

            </div>
            {/* -----grid-end-here----- */}
          </div>
          {/* -----project-content-end-here----- */}
        </div>
      </div>
    </>
  )
}

export default Projects