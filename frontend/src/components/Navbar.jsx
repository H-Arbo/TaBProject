import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from './Button'
import { IoIosContact } from "react-icons/io";

export default function Navbar() {
  const handleClick = () => {};

  return (
    <nav>
      <div className='flex'>
        <Link to={'/'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Front Page</Link>
        <Link to={'/register'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Registration Question</Link>
        <Link to={'/login'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Login Question</Link>
        <Link to='/resources'> <Button onClick={handleClick} color="darkblue">Resources</Button> </Link>
        <Link to='/aboutUs'> <Button onClick={handleClick} color="darkblue">About Us</Button> </Link>
        <Link to={'/doctor/home'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Doctor Home</Link>
        <Link to={'/patients/home'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Patient Home</Link>
      </div>
    </nav>
  )
}
