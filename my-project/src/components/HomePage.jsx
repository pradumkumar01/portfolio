import Articles from "./pages/Articles/Articles";
import Certificate from "./pages/Certificate";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import GitProjects from "./pages/GitProject/GitProjects";
import Links from "./pages/Links";
import MyProjects from "./pages/MyProjects/MyProjects";
import ProfileCard from "./pages/ProfileCard";
import Publications from "./pages/Publications/Publications";
import TechStack from "./pages/TechStack";
import ThemeCard from "./pages/ThemeCard";

const HomePage = () => {
  return (
    <>
      <div className="bg-zinc-200 ">
        <div className="bg-zinc-200 flex p-5">
          <div className="w-full lg:flex gap-5 ml-5">
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
              <Publications />
              <MyProjects />
              <Articles />
            </div>
          </div>
        </div>
        <div className="mt-5  flex justify-center items-center">
        <div className="mb-5">
          <h1 className="px-3 py-3 text-zinc-500 bg-white rounded-md ">Made with GitProfile and ❤️</h1>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default HomePage;
