import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div>
        <Link to="https://nursing.ua.edu/"
                className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' style={{ marginLeft: "700px" }}>
                    <button >
                    Capstone College of Nursing
                    </button>
                </Link>    
        </div>
    )
}

export default Resources