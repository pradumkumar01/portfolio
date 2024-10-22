import { useContext } from "react";
import { getComponent, } from "./Themes";
import { ThemeContext } from "../Theme/ThemeContext";

const Certificate = () => {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className='mt-5'>
      <div className={`${getComponent(isDarkMode)} h-36 p-4 shadow-lg shadow-black`}>
        <div className="ml-3">
          <h1 className={`${isDarkMode ? 'text-zinc-300' : 'text-zinc-500'} text-xl font-semibold`}>Certification</h1>
          <div className="ml-2 border-l ">
          <p className="ml-3 relative text-zinc-500">
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-zinc-500 rounded-full"></span>
              September 2024 - Present
            </p>
         
          <p  className={`${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} ml-3`}>Lorem ipsum</p>
          <p  className="text-zinc-500 ml-3">Lorem ipsum dolor sit amet</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Certificate;
