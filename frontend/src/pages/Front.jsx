import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
// import logo from '../images/asthma_logo.png';


const Front = () => {
    const handleClick = () => { };
    return (
        <div className='p-4'>
            
            <div className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <Link to="/patients/home">
                    <Button onClick={handleClick} color="darkblue">Patient Home</Button>
                    <Link to="/patients/home"
                        className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' style={{ marginLeft: "700px" }}>
                        <button >
                            Home
                        </button>
                    </Link>
                </Link> */}
            </div>
            <div className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Link to='/login'>
                        <Button onClick={handleClick} color="darkblue">Login</Button>
                    </Link>
                    <Link to='/register'>
                        <Button onClick={handleClick} color="darkblue">Register</Button>
                    </Link>
                    <Link to='/resources'>
                        <Button onClick={handleClick} color="darkblue">Resources</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Front