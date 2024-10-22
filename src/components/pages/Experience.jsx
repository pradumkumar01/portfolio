import { useContext } from "react";
import { getComponent } from "./Themes";
import { ThemeContext } from "../Theme/ThemeContext";

const Experience = () => {

  const exp = [
    {
   time : 'September 2021 - Present',
   position: 'Position',
company : 'Company Name'
  },
    {
   time : 'July 2021 - August 2024',
   position: 'Position',
company : 'Company Name'
  }
]
const {isDarkMode} =  useContext(ThemeContext);


  return (
    <div className="mt-5">
      <div className={` ${getComponent(isDarkMode)}bg-white h-56 p-4 rounded-md shadow-lg shadow-black`}>
        <div className="ml-1">
        <div>
          <h1 className={`text-xl ml-2 font-semibold ${isDarkMode ? 'text-zinc-300' : 'text-zinc-500'} `}>Experience</h1>
        </div>
        <div className="mt-2">
        {exp.map((item,index)=>{
          return (
<div key={index} className="border-l ml-4 relative">
            <p className="ml-3 relative text-zinc-500">
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-zinc-500 rounded-full"></span>
              September 2024 - Present
            </p>
            <p className={`${isDarkMode ? 'text-zinc-400' : 'text-zinc-700'} ml-2 `}>Position</p>
            <p className="ml-2 text-zinc-500">Karyanest</p>
          </div>

          )  
        })}
          

</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
