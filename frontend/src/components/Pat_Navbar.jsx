import { Link } from 'react-router-dom'
import Button from './Button'
import { MdOutlineAddBox, MdOutlineDelete, MdOutlinePerson } from 'react-icons/md';
import LogoutButton from '../components/LogoutButton';

const Pat_Navbar = () => {
  const handleClick = () => { };

  return (
    <nav>
      <div className='flex justify-between items-center p-4 rounded-md mb-4'>
        <div className="flex items-center">
          <Link to={'/patients/home'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Patient Home</Link>

          <Link to={`/patients/profile`} className="text-sky-800 mr-4">
            <MdOutlinePerson className='text-4xl' />
          </Link>
          <LogoutButton />
          <Link to='/resources'> <Button onClick={handleClick} color="darkblue">Resources</Button> </Link>
          <Link to='/aboutUs'> <Button onClick={handleClick} color="darkblue">About Us</Button> </Link>
        </div>
      </div>
    </nav>
  )
}

export default Pat_Navbar