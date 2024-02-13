import BackButton from '../components/BackButton';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const {email, password} = data
    try {
      const {data} = await axios.post('/doctor/login', {
        email,
        password
      });

      if(data.error){
        toast.error(data.error);
      }else{
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

      {/* <div>Doctor Login</div>
          <Link to = '/doctor/home'>
            <button type='submit' className='p-2 bg-sky-300 m-8'>
              Submit
            </button>
          </Link> */}
      <form onSubmit={docLogin}>
        <label>Email</label>
        <input type='email' placeholder='Enter email' value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })} />
        <label>Password</label>
        <input type='password' placeholder='Enter password' value = {data.password}
            onChange={(e) => setData({...data, password: e.target.value})} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
