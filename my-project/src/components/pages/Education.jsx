
const Education = () => {

  const education = [
    {
      year : '2021-2025',
      degree : 'BTech',
      instituteName : 'BIT'
    },
    {
      year : '2021-2025',
      degree : 'BTech',
      instituteName : 'BIT'
    }
  ]

  return (
    <div className="mt-5">
      <div className="bg-white h-52 p-4 shadow-lg rounded-md">
        <div className="ml-3">
          <h1 className="text-xl text-zinc-600 ">Education</h1>

{education.map((item,index)=>{
  return (
<div key={index} className="border-l ml-2">
            <p className="relative ml-3 text-zinc-500">
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full">
                </span>{item.year}</p>
            <p className="text-zinc-700 ml-3">{item.degree}</p>
            <p className="text-zinc-500 ml-3">{item.instituteName}</p>
          </div>
  )
})}

          


        </div>

      </div>
    </div>
  )
}

export default Education