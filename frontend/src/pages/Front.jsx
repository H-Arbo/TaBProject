import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Button from '../components/Button';
// import logo from '../images/asthma_logo.png';


const Front = () => {
    const handleClick = () => {};
    return (
        <div className='p-4'>
            <img src="/images/asthma_logo.png" style={{ width: '460px', height: '70px' }} />
            <div className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/patients/home">
                    <Button onClick={handleClick} color="darkblue">Patient Home</Button>
                </Link>
            </div>
            <div className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/login">
                    <Button onClick={handleClick} color="darkblue">Login</Button>
                </Link>
                <Link to="/register">
                    <Button onClick={handleClick} color="darkblue">Register</Button>
                </Link>
            </div>
        </div>
    )
}

export default Front