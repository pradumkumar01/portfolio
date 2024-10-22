const TechStack = () => {
  const techStack = [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQl',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Anted',
    'Tailwind'
  ];

  return (
    <div className="mt-5">
      <div className="bg-white h-48 rounded-md mx-auto p-4 shadow-lg">
        <h1 className="text-zinc-500 font-semibold text-xl">Tech Stack</h1>
        <div className="mt-4 flex flex-wrap gap-1  justify-center items-center">
          {techStack.map((item, index) => (
            <p key={index} className="bg-black font-semibold rounded-2xl inline-block py-1 px-3  text-white text-sm">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
