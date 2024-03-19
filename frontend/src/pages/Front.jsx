import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/tab_clear.png';
import Button from '../components/Button';

const Front = () => {
    return (
        <div className='flex justify-center items-center' style={{
            height: '100vh',
            background: '#63C196',
        }}>
            <div className='flex justify-center items-center' style={{
                flexDirection: 'column',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                background: '#fff',
            }}>
                <div className="logo-container" style={{
                    width: '300px',
                    height: '200px',
                    backgroundImage: `url(${logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}></div>
                <Link to='/login' style={{ margin: '10px' }}>
                    <Button color={'blue'}>Login</Button>
                </Link>
                <Link to='/register' style={{ margin: '10px' }}>
                    <Button color={'blue'}>Register</Button>
                </Link>
                <Link to='/resources' style={{ margin: '10px' }}>
                    <Button color={'blue'}>Resources</Button>
                </Link>
                <Link to='/aboutUs' style={{ margin: '10px' }}>
                    <Button color={'blue'}>About Us</Button>
                </Link>
            </div>
        </div>
    );
};

export default Front;
