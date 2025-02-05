import React from 'react';
import { mySkills } from '../api/mySkills';

const Skills = () => {
  return (
    <div id="skills" className="skills-section sm:w-[100%] sm:h-[105vh] mt-2 sm:flex sm:justify-center sm:items-center bg-black scroll-mt-24">
      <div className="skills-container sm:w-[90%] sm:h-[90%] bg-white sm:rounded-2xl">
        {/* ----- Skills Content Start ----- */}
        <div className="skills-content-area sm:w-[100%] sm:h-[100%] mx-auto sm:rounded-2xl">
          <div className="skills-title my-10">
            <p className="title text-center text-3xl pb-3 font-bold">My Skills</p>
            <p className="tagline text-center text-lg font-semibold">
              I create responsive and user-friendly websites that turn complex ideas into easy digital solutions.
            </p>
          </div>
          {/* ----- Skills Grid Start ----- */}
          <div className="skills-card-section w-[95%] mx-auto">
            <div className="sm:grid sm:grid-rows-2 sm:grid-cols-7 grid grid-cols-1">
              {mySkills.map((skill) => (
                <div key={skill.id} className="card sm:w-40 w-44 my-4 p-3 sm:mx-0 mx-auto shadow-2xl shadow-gray-400 rounded-2xl">
                  <img src={skill.image} alt={`${skill.name} logo`} />
                  <p className="language-name text-[#6e4df3] text-center pt-5 text-xl font-bold">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* ----- Skills Grid End ----- */}
        </div>
        {/* ----- Skills Content End ----- */}
      </div>
    </div>
  );
};

export default Skills;
