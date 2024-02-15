import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Dr_Navbar() {
  const [doctor, setDoctor] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const handleClick = () => { };

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`http://localhost:5555/doctor/${id}`)
  //     .then((response) => {
  //       setDoctor(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <nav>
      <div className='flex'>
        <Link to={'/'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Front Page</Link>
        <Link to={'/register'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Registration Question</Link>
        <Link to={'/login'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Login Question</Link>
        <Link to={'/doctor/login'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Doctor Login</Link>
        <Link to={'/doctor/register'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Doctor Registration</Link>
        <Link to={'/doctor/home'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Doctor Home</Link>

        {/* What will be in the final patient navbar */}
        <Link to={'/doctor/home'}> <Button onClick={handleClick} color = "darkblue">Doctor Home</Button> </Link>
        <Link to={'/doctor/profile'}> <Button onClick={handleClick} color = "darkblue"> Profile</Button> </Link>
        <Link to='/resources'> <Button onClick={handleClick} color="darkblue">Resources</Button> </Link>
      </div>
    </nav>
  )
}
