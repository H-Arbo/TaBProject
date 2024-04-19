import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdInfoOutline, MdOutlinePerson, MdHome } from 'react-icons/md';
import LogoutButton from '../components/LogoutButton';
import BackButton from '../components/BackButton';
import Info from '../components/Info';

const Pat_Navbar = ({email}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex flex-wrap w-full justify-between items-center py-4 px-6">
        <BackButton />
        <h1 className="text-2xl font-semibold">Patient Portal</h1>
        <div className="flex items-center space-x-2">
          
          <Link to="/patients/home" state={{ pat_email: email }} className="text-sky-800">
            <MdHome className="text-3xl" />
          </Link>
          <Link to={`/patients/profile`}  state={{ pat_email: email }} className="text-sky-800 mr-4">
            <MdOutlinePerson className='text-3xl' />
          </Link>
          <div
            className="menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <MdInfoOutline className="text-sky-800 text-3xl"/>
            {isDropdownVisible && <Info />}
          </div>
          <LogoutButton />
        </div>
      </div>
    </nav>
  )
}

export default Pat_Navbar