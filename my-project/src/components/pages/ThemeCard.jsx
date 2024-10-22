import { FaFilter } from 'react-icons/fa';

const ThemeCard = () => {

  function handleMouseOver() {
    document.getElementById('select').style.backgroundColor = 'gray';
  }

  function handleMouseOut() {
    document.getElementById('select').style.backgroundColor = 'white';
  }

  return (
    <div className="bg-white w-full h-auto rounded-md flex flex-col sm:flex-row justify-between items-center p-5 shadow-lg">
      <div className="mb-4 sm:mb-0">
        <h1 className="font-semibold text-zinc-700 text-lg">Theme</h1>
        <p className="text-zinc-500">Default</p>
      </div>
      <div className="relative w-full sm:w-auto">
        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2" />
        <select id='select' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
        className="w-full sm:w-auto pl-10 pr-3 py-2">
          <option value="Default">Default</option>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Cupcake">Cupcake</option>
        </select>
      </div>
    </div>
  );
}

export default ThemeCard;
