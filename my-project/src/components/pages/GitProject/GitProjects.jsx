import { FaGithub } from "react-icons/fa";

const gitProject = [
  1,2,3,4,5,6,7,8
]

const GitProjects = () => {
  return (
    <div className="">
      <div className="bg-zinc-300 h-1/2 rounded-md py-5 ">
        <div className="p-5 flex justify-between">
          <h1 className="text-zinc-700 text-lg font-semibold ml-10 ">
            Github Projects
          </h1>
          <a href="#">
            <p className="text-zinc-600 flex items-center border-b-2 border-zinc-600 ">Show All</p>
          </a>
        </div>

        <div className="px-5 gap-5 grid grid-cols-1 md:grid-cols-2">
          {gitProject.map((item, index) => {
            return (
              <div key={index} className="bg-white h-44 rounded-md shadow-lg">
                <div className="px-10 py-8">
                  <div className="flex">
                    <FaGithub className="mr-2 mt-2" />
                    <p className="mb-3 text-zinc-700 text-xl">gitprofile</p>
                  </div>
                  <p className="text-zinc-600 text-sm">
                    🚀 Create and deploy a dynamic portfolio by just providing
                    your GitHub username.
                  </p>
                  <div className="flex justify-between mt-5 text-zinc-500 text-sm">
                    <div className="flex">
                      <FaGithub className="mr-1 mt-1" />{" "}
                      <p className="mr-2">1645</p>
                      <FaGithub className="mr-1 mt-1" /> <p>1572</p>
                    </div>
                    <div>
                      <p>
                        <span className="w-4 h-4 bg-blue-500 rounded-full absolute mt-1 -ml-5 "></span>
                        TypeScript
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GitProjects;
