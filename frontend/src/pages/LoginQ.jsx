import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const LoginQ = () => {
    const handleClick = () => { };
    return (
        <div className='p-8'>
            <BackButton />
            <h1 className='text-3xl font-bold text-center mb-6'>Are you logging in as a Doctor or a Patient?</h1>

            <div className='flex justify-center items-center space-x-4'>
                <Link to="/patients/login">
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300'>
                        Patient
                    </button>
                </Link>
                <Link to='/doctor/login'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300'>
                        Doctor
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default LoginQ