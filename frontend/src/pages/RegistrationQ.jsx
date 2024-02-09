import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Button from '../components/Button';


const RegistrationQ = () => {
    const handleClick = () => {};
    return (

        <div className='p-4'>
            <img src="/images/asthma_logo.png" style={{ width: '460px', height: '70px' }} />
            <h1 className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>Registering as Doctor or Patient?</h1>

            <div className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/patients/register">
                    <Button onClick={handleClick} color="darkblue">Patient</Button>
                </Link>
                <Link to="/doctor/register">
                    <Button onClick={handleClick} color="darkblue">Doctor</Button>
                </Link>
            </div>
        </div>
    )
}

export default RegistrationQ