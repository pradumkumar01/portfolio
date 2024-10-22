const Publications = () => {
  const publication = [1, 2];
  return (
    <div className="mt-5">
      <div className="bg-zinc-300 rounded-md ">
        <div className="mx-10 pt-5">
          <h1 className="text-zinc-700 text-xl">Publications</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5">
          {publication.map((item, index) => {
            return (
              <div key={index} className="bg-white rounded-md px-14 py-10 text-justify shadow-lg flex flex-col justify-center items-center">
                <p className="text-zinc-800">Publication</p>
                <p className="text-zinc-500 text-sm mt-2 ">Journal Name</p>
                <p className="text-zinc-500 text-sm mb-2">Author: John Doe, Jane Smith</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae fugiat quis saepe sunt atque. Labore minus architecto
                  similique molestiae nam qui, quisquam dolores officiis iure
                  sapiente. Tempore neque ipsa quam repudiandae quod at, debitis,
                  aspernatur minus, voluptatibus nesciunt consectetur similique
                  ipsam! Aliquam magnam est possimus, asperiores nulla inventore
                  delectus vel.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Publications;
