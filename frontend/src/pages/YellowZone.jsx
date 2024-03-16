import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BackButton from '../components/BackButton';
import Pat_Navbar from '../components/Pat_Navbar';


const YellowZone = () => {
    return (
        <>
            <Pat_Navbar />
            <div className='p-4'>
                <BackButton/>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3x1 my-8'> Yellow Zone Info </h1>
                </div>
            </div>
        </>
    );

};

export default YellowZone