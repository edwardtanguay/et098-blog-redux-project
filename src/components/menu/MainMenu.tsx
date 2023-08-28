import { ImBlogger } from 'react-icons/im'
import { NavLink } from 'react-router-dom'
import Theme from './Theme'
const MainMenu = () => {
  return (
    <nav className='flex items-center justify-between container px-5 py-2'>
      <div className='flex items-center gap-1'>
        <ImBlogger className='text-RED' />
        <h3 className='text-ORANGE font-bold'>Orosia</h3>
      </div>
      <ul className='flex items-center gap-4'>
        <li><NavLink to='/home'>Home</NavLink></li>
        {import.meta.env.VITE_MODE === 'development' && (
          <li><NavLink to='/create-article'>Create Article</NavLink></li>
        )}
        <li><NavLink to='/AuthorsDirectory'>Authors Directory</NavLink></li>
      </ul>
      <div>
        <Theme />
      </div>
    </nav>
  )
}

export default MainMenu