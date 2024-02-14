import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div className='p-4'>
            <h1>Click the links below to learn more!</h1>
            <div className='flex justify-between items-center' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Link to="https://nursing.ua.edu/"
                    className='px-4 py-1 rounded-lg w-fit'>
                    <img src="/images/asthma_logo.png" style={{ width: '550px', height: '100px' }}></img>
                    <button >
                        American Academy of Allergy Asthma & Immunology
                    </button>
                </Link>


                <Link to="https://nursing.ua.edu/"
                    className='px-4 py-1 rounded-lg w-fit'>
                    <img src="/images/nursing_logo.jpg" style={{ width: '460px', height: '200px' }} />
                    <button >
                        Capstone College of Nursing
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Resources