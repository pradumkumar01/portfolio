import { useContext } from "react";
import { getComponent } from "./Themes";
import { ThemeContext } from "../Theme/ThemeContext";

const TechStack = () => {
  const techStack = [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQl',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Anted',
    'Tailwind'
  ];

  const {isDarkMode} = useContext(ThemeContext)

  return (
    <div className="mt-5">
      <div className={` ${getComponent(isDarkMode)} h-48 rounded-md mx-auto p-4 shadow-lg shadow-black`}>
        <h1 className={`${isDarkMode ?'text-zinc-300': 'text-zinc-500'} font-semibold text-xl`}>Tech Stack</h1>
        <div className="mt-4 flex flex-wrap gap-1  justify-center items-center">
          {techStack.map((item, index) => (
            <p key={index} className={`${isDarkMode ? 'bg-blue-600':'bg-black'} font-semibold rounded-2xl inline-block py-1 px-3  text-white text-sm`}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
