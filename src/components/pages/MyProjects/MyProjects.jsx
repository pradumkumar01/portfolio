import { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";
import { getComponent, getText, getThemeClassNames } from "../Themes";
import hotstar from "../../../assets/hotstar.png"
import bms from "../../../assets/bms.png"
import dashboard from "../../../assets/dashboard.png"
import todo from "../../../assets/todo.png"
import tic from "../../../assets/tic.png"

const MyProjects = () => {
  const project = [
    {
      "title": "Niramaya Homoepathy App",
      "img": "src/assets/niramya.png",
      "des": "Niramaya Homeopathy to facilitate patient-doctor interaction and holistic treatment access. The app allows users to book appointments, access homeopathic remedies, and maintain health records, promoting wellness through natural healing methods. The user-friendly interface ensures easy navigation and a seamless experience for patients.",
      "link": "https://play.google.com/store/apps/details?id=com.niramyahomeopathy.app&pcampaignid=web_share",

    },
    {
      "title": "Tic Tac Toe App",
      "img": tic,
      "des": "This project is a simple Tic Tac Toe game built with Flutter and sqflite for local storage. It features a clean and intuitive user interface, allowing players to enjoy the classic game on their mobile devices. The app supports Leaderboard and performance views of the players compare with other players. The use of sqflite ensures that game progress can be saved and resumed later.",
      "link": "https://github.com/pradumkumar01/tic_tac_toe_app",
    },
    {
      "title": "Bank Management System",
      "img": bms,
      "des": "This project is a comprehensive Bank Management System developed in C. It includes features such as account creation, balance inquiry, deposit, withdrawal, and account management. The system ensures data integrity and security, providing a reliable solution for managing banking operations efficiently.",
      "link": "https://github.com/pradumkumar01/Bank-Managment-System-"
    },
    {
      "title": "Dashboard",
      "img": dashboard,
      "des": "This project is a versatile dashboard application built using Flutter for both web and mobile platforms. It features a responsive design, real-time data visualization, and interactive components. The dashboard allows users to monitor key metrics, generate reports, and customize their view for better data analysis and decision-making.",
      "link": "https://github.com/pradumkumar01/dashboard",
    },
    {
      "title": "Todo App",
      "img": todo,
      "des": "This project is a full-stack Todo application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, read, update, and delete tasks. The application features user authentication, real-time updates, and a responsive design, providing a seamless task management experience.",
      "link": "https://github.com/pradumkumar01/todo-app",
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
                <a href={item.link} target="_blank" rel="noopener noreferrer">
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
