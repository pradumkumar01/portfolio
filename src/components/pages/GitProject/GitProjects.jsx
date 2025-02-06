import { FaCodeBranch, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import {  getText, getThemeClassNames } from "../Themes";
import { ThemeContext } from "../../Theme/ThemeContext";
import { BiGitRepoForked } from "react-icons/bi";

const gitProject = [
  { 
    'title' : 'shopwithus',
    'description': 'An e-commerce platform built with the MERN stack.',
    'fork': 0,
    'branch': 0,
    'language': 'MERN',
    'background': 'bg-blue-500'
  },
  { 
    'title' : 'portfolio',
    'description': 'A personal portfolio website built using React.',
    'fork': 0,
    'branch': 0,
    'language': 'React',
    'background': 'bg-green-500'
  },
  { 
    'title' : 'weatherApp',
    'description': 'A weather forecasting app built with JavaScript.',
    'fork': 0,
    'branch': 0,
    'language': 'JavaScript',
    'background': 'bg-yellow-500'
  },
  { 
    'title' : 'todoApp',
    'description': 'A to-do list application built with the MERN stack.',
    'fork': 0,
    'branch': 0,
    'language': 'MERN',
    'background': 'bg-blue-500'
  },
  { 
    'title' : 'hoststarClone',
    'description': 'A clone of the Hoststar website built using React.',
    'fork': 0,
    'branch': 0,
    'language': 'React',
    'background': 'bg-green-500'
  },
  { 
    'title' : 'bankManagementSystem',
    'description': 'A bank management system built with C.',
    'fork': 0,
    'branch': 0,
    'language': 'C',
    'background': 'bg-orange-500'
  },
  { 
    'title' : 'onlineKachaheri',
    'description': 'An online court system built with Dart.',
    'fork': 1,
    'branch': 10,
    'language': 'Dart',
    'background': 'bg-purple-500'
  }
];



const GitProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const {isDarkMode} =  useContext(ThemeContext);

  return (
    <div className="">
      <div className={` ${isDarkMode ? 'bg-gray-600' : 'bg-zinc-300'} h-1/2 rounded-md py-5 shadow-lg shadow-black`}>
        <div className="p-5 flex justify-between">
          <h1 className={`${getText(isDarkMode)} text-lg font-semibold ml-10 `}>
           Github Projects
          </h1>
          <a href="#" onClick={handleShowAll}>
            <p className={`text-zinc-500 flex items-center`}>
              {showAll ? "Show Less" : "Show All"}
            </p>
          </a>
        </div>

        <div className="px-5 gap-5 grid grid-cols-1 md:grid-cols-2">
          {gitProject.slice(0, showAll ? gitProject.length : 6).map((item, index) => {
            return (
              

              <div key={index} className={`${getThemeClassNames(isDarkMode)} h-44 rounded-md shadow-md shadow-gray-700`}>
                <a href="https://github.com/pradumkumar01/" >
                <div className={`${isDarkMode? 'text-zinc-300': 'text-zinc-500' } px-10 py-8`}>
                  <div className="flex">
                    <FaGithub className="mr-2 mt-2" />
                    <p className="mb-3  text-xl">{item.title}</p>
                  </div>
                  <p className=" text-sm">
                    🚀{item.description}.
                  </p>
                  <div className="flex justify-between mt-5  text-sm">
                    <div className="flex">
                      <FaCodeBranch className="mr-1 mt-1" />{" "}
                      <p className="mr-2">{item.branch}</p>
                      <BiGitRepoForked className="mr-1 mt-1" /> <p>{item.fork}</p>
                    </div>
                    <div>
                      <p>
                        <span className={`w-4 h-4 ${item.background} rounded-full absolute mt-1 -ml-5 `}></span>
                        {item.language}
                      </p>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GitProjects;
