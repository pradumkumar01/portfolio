const Articles = () => {
  const data = ["#api", "#backend", "#javascript", "#tutorial"];

  const articles = [1, 2];

  return (
    <div className="mt-5">
      <div className="bg-zinc-300 h-full p-5 rounded-md">
        <h1 className="p-5 text-zinc-600 text-xl font-semibold">My Articles</h1>

        {articles.map((item, index) => {
          return (
            <div key={index} className="w-full p-4 bg-white mb-4 shadow-lg"> 
              <div className="gap-5">
                <div className="flex">
                  <div>
                    <img
                      className="h-28 w-32 rounded-3xl"
                      src="https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fffr1iot2omhd2pxpb139.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-5">
                    <p className="text-zinc-600 font-semibold text-md">
                      Prevent API Overload: A Comprehensive Guide to Rate Limiting
                      with Bottleneck
                    </p>
                    <p className="text-zinc-500 text-xs">5 months ago</p>

                    <p className="text-zinc-500 text-md mt-2">
                      In the realm of modern web development, APIs have become the
                      lifeblood of our applications. They...
                    </p>
                    <div>
                      {data.map((item, index) => {
                        return (
                          <p
                            key={index}
                            className="bg-zinc-300 text-zinc-600 rounded-2xl inline-block text-sm mt-2 py-1 px-3 mr-1"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
