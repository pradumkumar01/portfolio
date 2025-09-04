import { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";
import { getComponent, getText, getThemeClassNames } from "../Themes";
import hotstar from "../../../assets/hotstar.png"
import bms from "../../../assets/bms.png"
import dashboard from "../../../assets/dashboard.png"
import todo from "../../../assets/todo.png"

const MyProjects = () => {
  const project = [
    // {
    //   "title": "Shop with Us",
    //   "img": "src/assets/shop.png",
    //   "des": "This project is a fully functional e-commerce platform designed to provide users with a seamless shopping experience. It allows users to browse products, view detailed descriptions, add items to the cart, and make secure payments. The platform is responsive, ensuring compatibility across devices"
    // },
    {
      "title": "Hotstar Clone Layout",
      "img": hotstar,
      "des": "This project is a replica of the popular streaming platform Hotstar, designed to showcase skills in building modern web applications with seamless user experiences. The platform allows users to browse and stream movies, TV shows, and live events with features like search, categories, and user authentication."
    },
    {
      "title": "Bank Management System",
      "img": bms,
      "des": "This project is a comprehensive Bank Management System developed in C. It includes features such as account creation, balance inquiry, deposit, withdrawal, and account management. The system ensures data integrity and security, providing a reliable solution for managing banking operations efficiently."
    },
    {
      "title": "Dashboard",
      "img": dashboard,
      "des": "This project is a versatile dashboard application built using Flutter for both web and mobile platforms. It features a responsive design, real-time data visualization, and interactive components. The dashboard allows users to monitor key metrics, generate reports, and customize their view for better data analysis and decision-making."
    },
    {
      "title": "Todo App",
      "img": todo,
      "des": "This project is a full-stack Todo application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, read, update, and delete tasks. The application features user authentication, real-time updates, and a responsive design, providing a seamless task management experience."
    },
  ];

  const {isDarkMode} = useContext(ThemeContext) 

  return (
    <div className="mt-5">
      <div className={`${getComponent(isDarkMode)}  py-5 rounded-md shadow-lg shadow-black`}>
        <h1 className={`${getText(isDarkMode)} text-xl font-semibold ml-5 p-5`}>
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-5 ">
          {project.map((item, index) => {
            return (
              <div
                key={index}
                className={`${getThemeClassNames(isDarkMode)} px-5 py-5 rounded-md h-90 shadow-md shadow-slate-800 `}
              >
                <a href="https://example.com/">
                <div className="flex flex-col justify-center items-center">
                  <h1 className={`${isDarkMode? 'text-zinc-300': 'text-zinc-500' } font-semibold text-lg my-2`}>
                    {item.title}
                  </h1>
                  <img
                    className="w-60 h-24"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className={`${isDarkMode? 'text-zinc-300': 'text-zinc-500' } text-justify px-6 py-5 text-sm`}>
                  {item.des}
                  </p>
                </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
