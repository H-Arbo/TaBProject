import BackButton from '../components/BackButton';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'


export default function DLogin() {
  const nav = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const docLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data
    try {
      
      const { data } = await axios.post('/doctor/login', {
        email,
        password
      });

      
      if (data.error) {
        toast.error(data.error);
        setData({ ...data, password: '' });
      } else {
        setData({})
        nav('/doctor/home');
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-4'>
      <BackButton />

      < div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <h1 className='text-3xl my-4' >Doctor Login</h1>
        <form onSubmit={docLogin}>
          <label>Email</label>
          <input type='email' placeholder='Enter email' value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className='border-2 border-gray-500 px-4 py-2  w-full ' />


          <label>Password</label>
          <input type='password' placeholder='Enter password' value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className='border-2 border-gray-500 px-4 py-2  w-full ' />

          <button type='submit' className='p-2 bg-sky-300 m-8'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
