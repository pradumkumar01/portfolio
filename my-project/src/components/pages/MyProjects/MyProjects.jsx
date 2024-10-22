const MyProjects = () => {
  const project = [1, 2];

  return (
    <div className="mt-5">
      <div className="bg-zinc-300 py-5 rounded-md">
        <h1 className="text-xl text-zinc-700 font-semibold ml-5 p-5">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-5 ">
          {project.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white px-5 py-5 rounded-md h-90 shadow-lg"
              >
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-zinc-600 font-semibold text-lg my-2">
                    Project Name
                  </h1>
                  <img
                    className="w-24 h-24"
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-zinc-500 text-justify px-6 py-5 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Velit
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
