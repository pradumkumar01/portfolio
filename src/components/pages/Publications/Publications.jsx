import { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";
import { getText, getThemeClassNames } from "../Themes";

const Publications = () => {
  const publication = [1, 2];

  const {isDarkMode} = useContext(ThemeContext)

  return (
    <div className="mt-5">
      <div className={` ${isDarkMode ? 'bg-gray-600' : 'bg-zinc-300'} rounded-md shadow-lg shadow-black `}>
        <div className="mx-10 pt-5">
          <h1 className={`${getText(isDarkMode)} font-semibold text-xl `}>Publications</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5">
          {publication.map((item, index) => {
            return (
              <div key={index} className={`${getThemeClassNames(isDarkMode)} rounded-md px-14 py-10 text-justify  flex flex-col justify-center items-center shadow-md shadow-slate-700 ` }>
                <a href="https://example.com/">
                <p className="text-zinc-400 text-center">Publication</p>
                <p className="text-zinc-500 text-sm mt-2 text-center">Journal Name</p>
                <p className="text-zinc-500 text-sm mb-2 text-center">Author: John Doe, Jane Smith</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae fugiat quis saepe sunt atque. Labore minus architecto
                  similique molestiae nam qui, quisquam dolores officiis iure
                  sapiente. Tempore neque ipsa quam repudiandae quod at, debitis,
                  aspernatur minus, voluptatibus nesciunt consectetur similique
                  ipsam! Aliquam magnam est possimus, asperiores nulla inventore
                  delectus vel.
                </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Publications;
