import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import {  getText, getThemeClassNames } from "../Themes";
import { ThemeContext } from "../../Theme/ThemeContext";

const gitProject = [
  1, 2, 3, 4, 5, 6, 7, 8
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
          {gitProject.slice(0, showAll ? gitProject.length : 4).map((item, index) => {
            return (
              

              <div key={index} className={`${getThemeClassNames(isDarkMode)} h-44 rounded-md shadow-md shadow-gray-700`}>
                <a href="https://github.com/pradumkumar045/" >
                <div className={`${isDarkMode? 'text-zinc-300': 'text-zinc-500' } px-10 py-8`}>
                  <div className="flex">
                    <FaGithub className="mr-2 mt-2" />
                    <p className="mb-3  text-xl">gitprofile</p>
                  </div>
                  <p className=" text-sm">
                    🚀 Create and deploy a dynamic portfolio by just providing
                    your GitHub username.
                  </p>
                  <div className="flex justify-between mt-5  text-sm">
                    <div className="flex">
                      <FaGithub className="mr-1 mt-1" />{" "}
                      <p className="mr-2">1645</p>
                      <FaGithub className="mr-1 mt-1" /> <p>1572</p>
                    </div>
                    <div>
                      <p>
                        <span className="w-4 h-4 bg-blue-500 rounded-full absolute mt-1 -ml-5 "></span>
                        TypeScript
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
