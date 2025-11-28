import { useContext } from "react";
// import Articles from "./pages/Articles/Articles";
import Certificate from "./pages/Certificate";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import GitProjects from "./pages/GitProject/GitProjects";
import Links from "./pages/Links";
import MyProjects from "./pages/MyProjects/MyProjects";
import ProfileCard from "./pages/ProfileCard";
// import Publications from "./pages/Publications/Publications";
import TechStack from "./pages/TechStack";
import ThemeCard from "./pages/ThemeCard";
import { ThemeContext } from "./Theme/ThemeContext";
import InteractiveThreeJS from "./animations/InteractiveThreeJS";
import ThreeJSBackground from "./animations/ThreeJSBackground";
import AnimatedBackground from "./animations/AnimatedBackground";
import WaveAnimation from "./animations/WaveAnimation";

// import {useTheme} from './Theme/ThemeContext'


const HomePage = () => {

  const {isDarkMode} = useContext(ThemeContext);

  return (
    <>
      {/* Three.js Background Effects */}
      <InteractiveThreeJS isDarkMode={isDarkMode} />
      <ThreeJSBackground isDarkMode={isDarkMode} />
      <AnimatedBackground isDarkMode={isDarkMode} />
      <WaveAnimation isDarkMode={isDarkMode} />
      
      <div className={`
         p-5`}>
        {/* <div className={`
        ${isDarkMode === true ? 'bg-gray-800/60 text-zinc-400' : 'bg-zinc-400/60'} 
        
          flex p-5`}> */}
          <div className="w-full lg:flex gap-5 ml-0">
            <div className="flex flex-col sm:w-full lg:w-1/3  mb-5">
              <ThemeCard />
              <ProfileCard />
              <Links />
              <TechStack />
              <Experience />
              <Certificate />
              <Education />
            </div>
            <div className="">
              <GitProjects />
              {/* <Publications /> */}
              <MyProjects />
              {/* <Articles /> */}
            </div>
          </div>
        {/* </div> */}
        <div className="mt-5  flex justify-center items-center ">
          <div className="mb-5">
            <a href="https://github.com/pradumkumar01">
              <h1 className={`px-3 py-3 shadow-lg shadow-black ${isDarkMode === true ? 'bg-gray-600 text-yellow-300' : 'bg-zinc-300'}  rounded-md`}>Made By Pradum Kumar <span className="animate-ping ">❤️</span></h1>
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
