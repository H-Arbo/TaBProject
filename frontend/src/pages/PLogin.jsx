import React from 'react'
import BackButton from '../components/BackButton';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function PLogin() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault()
  }

  return (
    <div className='p-4'>
      <BackButton />
      
      < div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <h1 className='text-3xl my-4' >Patient Login</h1>
        <form onSubmit={loginUser}>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter email'
            value = {data.email}
            onChange={(e) => setData({...data, email: e.target.value})}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            value = {data.password}
            onChange={(e) => setData({...data, password: e.target.value})}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
          <Link to = '/patients/home'>
            <button type='submit' className='p-2 bg-sky-300 m-8'>
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}
