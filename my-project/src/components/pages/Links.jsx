    import { CgWebsite } from 'react-icons/cg';
import { FaDev, FaGithub, FaLinkedin, FaMailBulk, FaMapMarkerAlt, FaMastodon, FaMedium} from 'react-icons/fa';
import { FaTwitter,  } from 'react-icons/fa6';
    const Links = () => {

    const arrayData = [
      {
        icons: <FaMapMarkerAlt className='h-3' />, 
        title: 'Base in : ',
        des: 'India'
      },
      {
        icons: <FaGithub className='h-3'  />, 
        title: 'GitHub : ',
        des: 'pradumkumar@github.in'
      },
      {
        icons: <FaTwitter className='h-3'  />, 
        title: 'Twitter: ',
        des: 'pradumkumar@twitter.in'
      },
      {
        icons: <FaMastodon className='h-3'  />, 
        title: 'Mastdon: ',
        des: 'pradumkumar@mastodon.social'
      },
      {
        icons: <FaLinkedin className='h-3'  />, 
        title: 'Linkedln: ',
        des: 'pradum@linkedln.in'
      },
      {
        icons: <FaMedium className='h-3'  />, 
        title: 'Medium : ',
        des: 'pradumkumar'
      },
      {
        icons: <FaDev className='h-3'  />, 
        title: 'Dev : ',
        des: 'pradumkumar'
      },
      {
        icons: <CgWebsite className='h-3'  />, 
        title: 'Website : ',
        des: 'www.pradumkumar.in'
      },
      {
        icons: <FaMailBulk className='h-3'  />, 
        title: 'Base in : ',
        des: 'pradum@gmail.com'
      },
    ]

      return (
        <div className="mt-5">
          <div className="bg-white h-auto rounded-md p-4 shadow-lg">
            {arrayData.map((item, index) => (
              <div key={index} className='flex justify-between mt-2' >
                <div className='flex gap-2 '>
                  <p className='mt-3 h-10 text-zinc-500'>{item.icons}</p>
                  <p className='mt-1  text-zinc-500'>{item.title}</p>
                  
                </div>
                <div>
                <p>{item.des}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      )
    }

export default Links



  