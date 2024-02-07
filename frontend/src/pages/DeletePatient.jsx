// import React from 'react'
// import {Routes, Route} from 'react-router-dom'

/////////////////////////////////////////////////////////////////
//Please delete this section once below section is implemented.
const DeletePatient = () => {
    return(
      <div> DeletePatient </div>
    )
  }  
  export default DeletePatient
/////////////////////////////////////////////////////////////////


//Below is the full DeletePatient code. I think this will work fine.
//I am leaving it commented out for now just in case. I don't want to mess anyone up.
//Feel free to uncomment (and potentially edit) it when relevant. LMK if I need to fix anything.

/*import React, { useState } from 'react'
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
            <h1 className= 'text-3x1 my-4'>Delete Patient</h1>
            {loading ? <Loading /> : ''}
            <div className= 'flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto'>
                <h3 className='text-2x1'> Are you sure you want to delete this patient?</h3>
                <button
                    className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeletePatient}
                >

                Yes, delete patient.
                </button>
            </div>
        </div>
    )
}

export default DeletePatient*/