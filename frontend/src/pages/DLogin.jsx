import BackButton from '../components/BackButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DLogin() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const docLogin = (e) => {
    e.preventDefault();

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
