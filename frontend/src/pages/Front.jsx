import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/tab_clear.png';
import Button from '../components/Button';
import './css/front_characters.css'

const Front = () => {
    return (
        <div className='flex justify-center items-center' style={{
            height: '100vh',
            background: '#63C196',
        }}>
            <img src='/images/Charlotte-Waving.png' alt="/images/Charlotte-Waving.png" style={{
                maxHeight: '40%',
                width: 'auto',
                paddingRight: '25px',
            }} className='character' />
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
            <img src='/images/Dr.Breeze-Confident.png' alt="/images/Dr.Breeze-Confident.png" style={{
                maxHeight: '50%',
                width: 'auto',
                paddingLeft: '25px',
            }} className='character' />
        </div>
    );
};

export default Front;
