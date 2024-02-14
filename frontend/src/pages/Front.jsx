import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import logo from '../images/asthma_logo.png';


const Front = () => {
    return(
        <div className='p-4'>
            <img src="/images/asthma_logo.png" style={{ width: '460px', height: '70px' }} />
            <Link to="/patients/home"
                className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' style={{ marginLeft: "700px" }}>
                    <button >
                    Home
                    </button>
                </Link>
            
            <div className='flex justify-between items-center' style={{justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/login"
                className=' bg-sky-800 text-white px-20 py-20 rounded-lg w-fit'>
                    <button>
                        Login
                    </button>
                </Link>
                <Link to="/register"
                className=' bg-sky-800 text-white px-20 py-20 rounded-lg w-fit'>
                    <button>
                        Register
                    </button>
                </Link>
                <Link to="/resources"
                className=' bg-sky-800 text-white px-20 py-20 rounded-lg w-fit'>
                    <button>
                        Resources
                    </button>
                </Link>
            </div>
        </div>
    )
  }
  
  export default Front