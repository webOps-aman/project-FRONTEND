import React from 'react';
import { myProjects } from '../api/myProjects';

const Projects = () => {
  console.log(myProjects);

  return (
    <>
      <div id="projects" className="project-section sm:w-[100%] mt-2 sm:flex sm:justify-center sm:items-center bg-white scroll-mt-24">
        <div className="project-container sm:w-[90%] bg-black sm:rounded-2xl h-auto">
          {/* -----project-content-start-here----- */}
          <div className="project-content-area sm:w-[100%] mx-auto sm:rounded-2xl h-auto">
            <div className="project-title my-6 sm:py-0 pt-5 text-white">
              <p className="title text-center sm:text-3xl text-2xl font-bold">Projects & Assignments</p>
            </div>

            {/* -----grid-start-here----- */}
            <div className="project-card-section w-[95%] mx-auto">
              <div className="sm:grid sm:grid-rows-auto sm:grid-cols-3 grid grid-cols-1 gap-5">
                {/* -----project-card-start-here----- */}
                {myProjects.map((project) => (
                  <div key={project.id} className="w-[95%] sm:my-4 mb-5 mx-auto flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <img
                      className="w-full h-auto rounded-t-xl"
                      src={project.image}
                      alt={project.name}
                    />
                    <div className="p-4 md:p-5">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.name}</h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-400">{project.description}</p>

                      <div className="w-[200px] button-group flex justify-between">
                        <div className="live-demo-div">
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <button className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                              Live Demo
                            </button>
                          </a>
                        </div>
                        <div className="github-div">
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <button className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                              Github Link
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* -----project-card-end-here----- */}
              </div>

            </div>
            {/* -----grid-end-here----- */}
          </div>
          {/* -----project-content-end-here----- */}
        </div>
      </div>
    </>
  );
};

export default Projects;

