import { useContext } from "react";
import { getComponent, } from "./Themes";
import { ThemeContext } from "../Theme/ThemeContext";

const Certificate = () => {
  const {isDarkMode} = useContext(ThemeContext)
  const certificate = [{
    title: 'Introduction to Flutter Course',
    date: 'November 2024',
    description: 'Flutter framework and Dart programming',
  
  },
  {
    title: 'Introduction to React Course',
    date: 'November 2024',
    description: 'React and JavaScript ',

  },
 
  
];
  return (
    <div className='mt-5'>
      <div className={`${getComponent(isDarkMode)}  p-4 shadow-lg shadow-black`}>
        {certificate.map((item, index) => (
           
         <div key={index} className="ml-3">
         <h1 className={`${isDarkMode ? 'text-zinc-200' : 'text-zinc-500'} text-xl font-semibold`}>{item.title}</h1>
         <div className="ml-2 border-l ">
         <p className={`ml-3 relative ${isDarkMode ? 'text-zinc-300' : 'text-zinc-500'}`}>
             <span className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 ${isDarkMode?'bg-sky-500': 'bg-zinc-500'} rounded-full animate-ping`}></span>
             {item.date}
           </p>
        
         <p  className={`${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} ml-3`}>{item.description}</p>
         
         </div>
         
       </div> ))}
        
      </div>
    </div>
  );
};

export default Certificate;
