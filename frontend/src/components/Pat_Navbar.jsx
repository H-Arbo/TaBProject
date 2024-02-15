import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Button from './Button'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";

export default function Pat_Navbar() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const handleClick = () => { };
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/patients')
      .then((response) => {
        setPatients(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <nav>
      <div className='flex'>
        {/* Purely for testing */}
        <Link to={'/'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Front Page</Link>
        <Link to={'/register'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Registration Question</Link>
        <Link to={'/login'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Login Question</Link>
        <Link to={'/patients/login'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Patient Login</Link>
        <Link to={'/patients/register'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Patient Registration</Link>

        {/* What will be in the final patient navbar */}
        <Link to={'/patients/home/${patients._id}'} IoHomeOutline></Link>
        <Link to={'/patients/profile/${patients._id}'} IoIosContact></Link>
        <Link to='/resources'> <Button onClick={handleClick} color="darkblue">Resources</Button> </Link>
      </div>
    </nav>
  )
}
