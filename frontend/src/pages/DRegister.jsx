import React from 'react';
import BackButton from '../components/BackButton';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DRegister() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  //TODO: put in a register/login doctor and patient
  const registerUser = async (e) => {
    e.preventDefault();

    const {name, email,password} = data;

    try {
      const {data} = await axios.post('/register', { //TODO '/register' is not a valid => change to docRegister & patRegister, respectively
        name, email, password
      })
    } catch (error) {
      console.log(error);
    }

  }
  

  return (
    <div className='p-4'>
      <BackButton />
      
      < div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <h1 className='text-3xl my-4' >Doctor Registration</h1>
        <form className='my-4' onSubmit={registerUser}>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            placeholder='Enter name'
            value = {data.name}
            onChange={(e) => setData({...data, name: e.target.value})}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='email'
            placeholder='Enter email'
            value = {data.email}
            onChange={(e) => setData({...data, email: e.target.value})}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          
          <label className='text-xl mr-4 text-gray-500'>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            value = {data.password}
            onChange={(e) => setData({...data, password: e.target.value})}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          <Link to = '/doctor/login'>
            <button type='submit' className='p-2 bg-sky-300 m-8'>
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}
