import { useContext, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { ThemeContext } from '../Theme/ThemeContext';

const arrayTheme = ['Light', 'Dark'];

const ThemeCard = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(arrayTheme[0]);

  function handleThemeChange(event) {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
    toggleTheme();
  }

  function handleMouseOver() {
    document.getElementById('select').style.backgroundColor = 'grey';
  }
  function handleMouseDown() {
    document.getElementById('select').style.backgroundColor = 'white';
  }

  return (
    <div
      id='theme'
      className={`w-full h-auto rounded-md grid grid-rows-1 grid-cols-2   p-5 shadow-lg shadow-black ${
        isDarkMode === true ? 'bg-gray-800 text-zinc-400' : 'bg-white'
      }`}
    >
      <div className="">
        <h1 className="font-semibold text-text text-lg">Theme</h1>
        <p className="text-text">{selectedTheme}</p>
      </div>
      <div className={`relative no-border grid  `}>
        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2" />
        <select
          id='select'
          onChange={handleThemeChange}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseDown}
          className={` pl-10  cursor-pointer rounded-md ${
            isDarkMode ? 'bg-gray-700 text-black ' : 'bg-white text-black'
          }`}
        >
          {arrayTheme.map((item, index) => (
            <option className="cursor-pointer" key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeCard;
