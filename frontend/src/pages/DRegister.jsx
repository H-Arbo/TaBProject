import BackButton from '../components/BackButton';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './css/characters.css'

export default function DRegister() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  const docRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, phone} = form;

    try {
      const { data } = await axios.post('/doctor/register', {
        name, email, password, phone
      })

      if (data.error) {
        setForm({ ...form, password: "" });
        toast.error(data.error);

      } else {
        setForm({})
        toast.success('Registration Successful!')
        nav('/doctor/login');
      }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className='p-4'>
      <BackButton />

      <div className='flex justify-center items-center pt-2'>
        <div className='flex flex-wrap flex-col justify-center border-2 border-sky-400 rounded-xl p-4 max-w-[600px]'>
          <h1 className='text-3xl my-4'>Doctor Registration</h1>
          <form className='my-4' onSubmit={docRegister}>
            <label className='text-xl mr-4 text-gray-500'>Name</label>
            <input
              type='text'
              placeholder='Enter name'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              maxLength={50}
            />

            <label className='text-xl mr-4 text-gray-500'>Email</label>
            <input
              type='email'
              placeholder='Enter email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value.toLowerCase() })}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              maxLength={30}
            />

            <label className='text-xl mr-4 text-gray-500'>Password</label>
            <input
              type='password'
              placeholder='Enter password'
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              maxLength={15}
            />

            <label className='text-xl mr-4 text-gray-500'>Phone</label>
            <input
              type='text'
              placeholder='Enter phone number'
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              maxLength={11}
            />
            <button type='submit' className='p-2 bg-sky-300 m-8'>
              Submit
            </button>
          </form>
        </div>

        <img src='/images/Charlotte-Waving.png' alt="/images/Charlotte-Waving.png" style={{
          height: 'auto',
          width: '15%',
          paddingLeft: '25px',
        }} className='front' />
      </div>
    </div>
  )
}
