import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeletePatient = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeletePatient = () => {
        setLoading(true);
        axios 
            .delete('http://localhost:5555/patients/${id}')
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
               setLoading(false) 
               alert('Error occurred. Check console.');
               console.log(error);
            });
    };
    return (
        <div className= 'p-4'>
            <BackButton />
            
            <h1 className= 'text-3x1 my-4'>Archive Patient</h1>
            {loading ? <Loading /> : ''}
            <div className= 'flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto'>
                <h3 className='text-2x1'> Are you sure you want to archive this patient?</h3>
                <button
                    className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeletePatient}
                >

                Yes, archive patient.
                </button>
            </div>
        </div>
    )
}

export default DeletePatient