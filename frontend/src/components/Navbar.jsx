import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className='flex'>
        <Link to={'/'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Front Page</Link>
        <Link to={'/register'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Registration Question</Link>
        <Link to={'/login'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Login Question</Link>
        <Link to={'/patients/login'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Patient Login</Link>
        <Link to={'/doctor/login'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Doctor Login</Link>
        <Link to={'/patients/register'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Patient Registration</Link>
        <Link to={'/doctor/register'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Doctor Registration</Link>
        <Link to={'/patients/home'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Patient Home</Link>
        <Link to={'/doctor/home'} className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>Doctor Home</Link>
      </div>
    </nav>
  )
}
