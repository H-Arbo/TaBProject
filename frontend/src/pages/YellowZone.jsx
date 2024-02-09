import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const YellowZone = () => {
    return (
        <>
            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3x1 my-8'> Yellow Zone Info </h1>
                </div>
            </div>
        </>
    );

};

export default YellowZone