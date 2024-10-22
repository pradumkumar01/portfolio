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
      className={`w-full h-auto rounded-md flex flex-col sm:flex-row justify-between items-center p-5 shadow-lg shadow-black ${
        isDarkMode === true ? 'bg-gray-700 text-zinc-400' : 'bg-white'
      }`}
    >
      <div className="mb-4 sm:mb-0">
        <h1 className="font-semibold text-text text-lg">Theme</h1>
        <p className="text-text">{selectedTheme}</p>
      </div>
      <div className={`relative w-full sm:w-auto no-border`}>
        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2" />
        <select
          id='select'
          onChange={handleThemeChange}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseDown}
          className={`w-full sm:w-auto pl-10 pr-3 py-2 cursor-pointer rounded-md ${
            isDarkMode ? 'bg-gray-800' : 'bg-white text-black'
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
