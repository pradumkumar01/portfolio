import { useContext } from "react";
import { getComponent } from "./Themes";
import { ThemeContext } from "../Theme/ThemeContext";

const ProfileCard = () => {

  const {isDarkMode} =useContext(ThemeContext)

  return (
    <div>
      <div className={`${getComponent(isDarkMode)}w-full h-auto mt-5 rounded-md shadow-lg shadow-black`}>
        <div className="flex flex-col justify-center items-center p-6">
          <div className={`border-4 rounded-full ${isDarkMode ? 'border-blue-600' : 'border-black' } p-1`}>
            <img
              className="w-36 h-36 rounded-full"
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt=""
            />
          </div>
          <div className="mt-5 text-center">
            <h1 className={`text-2xl ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'} font-bold`}>Pradum Kumar</h1>
            <p className={`${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} mt-2 mb-3`}>
              ⚡Senior Software Engineer | Open Source Enthusiast | PHP | Node.js | React⚡
            </p>
          </div>
          <div>
            <a 
              href="/hello.pdf"
            >
              <button className="py-2 px-3 rounded-sm border border-slate-400 text-slate-400 text-sm shadow-md shadow-slate-700">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
