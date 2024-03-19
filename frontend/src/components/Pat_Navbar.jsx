import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlinePerson, MdHome } from 'react-icons/md';
import { FaBell } from 'react-icons/fa6';
import LogoutButton from '../components/LogoutButton';
import Button from './Button';
import BackButton from '../components/BackButton';

const Pat_Navbar = () => {
  const handleClick = () => { };

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <BackButton />
        <h1 className="text-3xl">Patient Portal</h1>
        <div className="flex items-center space-x-2">
          
          <Link to="/patients/home" className="text-sky-800">
            <MdHome className="text-4xl" />
          </Link>
          <Link to={`/patients/profile`} className="text-sky-800 mr-4">
            <MdOutlinePerson className='text-4xl' />
          </Link>
          <Link to='/resources'> <Button onClick={handleClick} color="darkblue">Resources</Button> </Link>
          <Link to='/aboutUs'> <Button onClick={handleClick} color="darkblue">About Us</Button> </Link>
          <LogoutButton />
        </div>
      </div>
    </nav>
  )
}

export default Pat_Navbar