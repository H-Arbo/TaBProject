import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const LoginQ = () => {
    const handleClick = () => {};
    return(
        <div className='p-4'>
            
            <BackButton/>

            <h1 className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>Logging in as Doctor or Patient?</h1>

            <div className='flex justify-between items-center' style={{justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/patients/login">
                    <Button onClick={handleClick} color="darkblue">Patient</Button>
                </Link>
                <Link to='/doctor/login'>
                    <Button onClick={handleClick} color="darkblue">Doctor</Button>
                </Link>
            </div>
        </div>

    )
  }
  
  export default LoginQ