import { useContext } from "react";
import { getComponent } from "./Themes";
import { ThemeContext } from "../Theme/ThemeContext";

const Experience = () => {

  const exp = [
    {
   time : 'July 2024 - September 2024',
   position: 'Flutter Trainee',
company : 'SPI Pvt Ltd'
  },  
    {
   time : 'March 2025 - June 2025',
   position: 'App Developer Intern',
company : 'DigiQuest Consultancy Services Private Limited'
  },  
    {
   time : 'July 2025 - Current',
   position: 'Flutter Developer',
company : 'BrniX Media'
  },
//     {
//     time : '1 September 2024 - 30 September 2024',
//     position: 'MERN Stack Developer Intern',
//  company : 'Nezuware'
//    }
]
const {isDarkMode} =  useContext(ThemeContext);


  return (
    <div className="mt-5">
      <div className={` ${getComponent(isDarkMode)}bg-white  p-4 rounded-md shadow-lg shadow-black`}>
        <div className="ml-1">
        <div>
          <h1 className={`text-xl ml-2 font-semibold ${isDarkMode ? 'text-zinc-200' : 'text-zinc-500'} `}>Experience</h1>
        </div>
        <div className="mt-2">
        {exp.map((item,index)=>{
          return (
<div key={index} className="border-l ml-4 relative">
            <p className={`ml-3 relative ${isDarkMode ? 'text-zinc-300' : 'text-zinc-500'} `}>
              <span className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 ${isDarkMode ? 'bg-sky-500':'bg-zinc-500'} rounded-full animate-ping`}></span>
              {item.time}
            </p>
          <p className={`${isDarkMode ? 'text-zinc-400' : 'text-zinc-700'} ml-2 `}>{item.position}</p>
            <p className="ml-2 text-zinc-500">{item.company}</p>
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
