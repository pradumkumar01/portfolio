import { useContext } from "react";
import { getComponent } from "./Themes"
import { ThemeContext } from "../Theme/ThemeContext";

const Education = () => {

  const education = [
    {
      year : '2021-2025',
      degree : 'B.Tech',
      instituteName : 'Buddha Institute of Technology'
    },
    {
      year : '2019-2021',
      degree : 'Intermediate',
      instituteName : 'Surmount International School'
    },
    {
      year : '2018-2019',
      degree : 'High School',
      instituteName : 'St. Xavier School'
    }
  ]

const {isDarkMode} =  useContext(ThemeContext);
  return (
    <div className="mt-5">
      <div className={` ${getComponent(isDarkMode)}  p-4 rounded-md shadow-lg shadow-black`}>
        <div className="ml-3">
          <h1 className={`${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'} text-xl  `}>Education</h1>

{education.map((item,index)=>{
  return (
<div key={index} className="border-l ml-2">
            <p className={`relative ml-3 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
              <span className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 ${isDarkMode ? 'bg-sky-500':'bg-zinc-600'} rounded-full animate-ping`}>
                </span>{item.year}</p>
            <p className={`${isDarkMode ?'text-zinc-400' :'text-zinc-700'} ml-3`}>{item.degree}</p>
            <p className="text-zinc-500 ml-3">{item.instituteName}</p>
          </div>
  )
})}

          


        </div>

      </div>
    </div>
  )
}

export default Education