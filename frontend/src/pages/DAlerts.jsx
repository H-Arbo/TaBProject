import React, { useState } from 'react';
import Dr_Navbar from '../components/Dr_Navbar';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const DAlerts = () => {

    return (
        <>
            <Dr_Navbar />
            <div className='p-4'>
                <h1>Patients that have gone in the red zone</h1>
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'> Name </th>
                            <th className='border border-slate-600 rounded-md'> Date </th>
                            <th className='border border-slate-600 rounded-md'> Time </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    );
};

export default DAlerts