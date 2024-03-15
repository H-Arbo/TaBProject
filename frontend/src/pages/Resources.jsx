import React from 'react';
import BackButton from "../components/BackButton";
import { Link } from 'react-router-dom';
import asthma_logo from '/images/asthma_logo.png';
import nursing_logo from '/images/nursing_logo.jpg';

const Resources = () => {
    return (
        <div className='p-9'>
            <BackButton />

            <h1 className="text-center text-2xl font-bold mb-8">Explore these resources!</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <Link to="https://www.aaaai.org/"
                    className='border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>
                    <div className="logo-container" style={{
                        width: '500px',
                        height: '100px',
                        backgroundImage: `url(${asthma_logo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}></div>
                </Link>
                <Link to="https://nursing.ua.edu/"
                    className='border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>
                    <div className="logo-container" style={{
                        width: '300px',
                        height: '200px',
                        backgroundImage: `url(${nursing_logo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}></div>
                </Link>
            </div>
        </div>
    )
}

export default Resources;
