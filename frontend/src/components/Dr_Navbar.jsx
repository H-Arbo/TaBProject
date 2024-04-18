import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlinePerson, MdHome, MdInfoOutline } from 'react-icons/md';
import { FaBell } from 'react-icons/fa6';
import LogoutButton from '../components/LogoutButton';
import Info from '../components/Info';
import BackButton from '../components/BackButton';

export default function Dr_Navbar({email}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  console.log(email);


  return (
    <nav className="bg-gray-100 shadow-md w-full">
      <div className="container mx-auto flex flex-wrap w-full justify-between items-center py-4 px-6">
        <BackButton />
        <h1 className="text-2xl font-semibold">Doctor Portal</h1>
        <div className="flex items-center space-x-2">

          <Link to="/doctor/home" state={{ doctor_email: email }} className="text-sky-800">
            <MdHome className="text-3xl" />
          </Link>
          <Link to="/doctor/profile" state={{ doctor_email: email }} className="text-sky-800">
            <MdOutlinePerson className="text-3xl" />
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
  );
}
