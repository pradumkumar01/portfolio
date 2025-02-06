    
import { FaGithub, FaLinkedin,  FaMapMarkerAlt,} from 'react-icons/fa';
import {  FaMessage, FaXTwitter,  } from 'react-icons/fa6';
import { getComponent } from './Themes';
import { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';

    const Links = () => {

    const arrayData = [
      {
        icons: <FaMapMarkerAlt className='h-4 animate-bounce ' />, 
        title: 'Base in : ',
        des: 'India'
      },
      {
        icons: <FaGithub className='h-4 animate-bounce '  />, 
        title: 'GitHub : ',
        des: 'pradumkumar01',
        url: 'https://github.com/pradumkumar01/'
      },
      {
        icons: <FaXTwitter className='h-4  animate-bounce'  />, 
        title: 'X : ',
        des: 'pradumkumar45',
        url: 'https://x.com/PradumKumar45'
      },
      
      {
        icons: <FaLinkedin className='h-4 animate-bounce '  />, 
        title: 'Linkedln: ',
        des: 'Pradum Kumar',
        url: 'https://www.linkedin.com/in/pradum-kumar-160538247/'
      },
      // {
      //   icons: <FaMedium className='h-3'  />, 
      //   title: 'Medium : ',
      //   des: 'pradumkumar'
      // },
      // {
      //   icons: <FaDev className='h-3'  />, 
      //   title: 'Dev : ',
      //   des: 'pradumkumar'
      // },
      // {
      //   icons: <CgWebsite className='h-3'  />, 
      //   title: 'Website : ',
      //   des: 'www.pradumkumar.in'
      // },
      {
        icons: <FaMessage className='h-4 animate-bounce ' />,
        title: 'E-mail : ',
        des: '7929pradumkumar@gmail.com',
        url: 'mailto:7929pradumkumar@gmail.com'

      },
    ]

    const {isDarkMode} = useContext(ThemeContext)

      return (
        <div className="mt-5">
          <div className={`
            ${getComponent(isDarkMode)} 
              h-auto lg:w-96 sm:w-full md:w-full rounded-md p-4 shadow-lg shadow-black`}>
            {arrayData.map((item, index) => (
              <div key={index} className='flex justify-between mt-2' >
                <div className={`${isDarkMode ? 'text-zinc-300' : 'text-zinc-500'} flex gap-2 `}>
                  <p className='mt-3 h-10 '>{item.icons}</p>
                  <p className='mt-1 '>{item.title}</p>
                </div>
                <div>
                  
                  {
                    !
                    item.url ?
                    <p className={`${isDarkMode ? 'text-zinc-300' : 'text-zinc-500'}`}>{item.des}</p> :
                  item.url && (
                    <a className={`${isDarkMode ? 'text-zinc-300' : 'text-zinc-500'}`} href={item.url} target="_blank" rel="">{item.des}</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

export default Links



  