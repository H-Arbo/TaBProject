 import React, {useEffect, useState} from 'react';
 //import {Routes, Route} from 'react-router-dom';
 import axios from 'axios';
 //import {useParams} from 'react-router-dom';
 import BackButton from '../components/BackButton';
 import Loading from '../components/Loading';

import { useEffect } from "react";

const ShowPatient = () => {
  const[patient, setPatient]=useState({});
  const[loading, setLoading] = useState(false);
  //const { id } = useParams();

useEffect(() => {
  setLoading(true);
  axios
    .get('http://localhost:5555/patients')
    .then((response) => {
      setPatient(response.data);
      
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
}, [])

  return(
    <div className='p-4'>
      <BackButton />
      <h1 patientName='text-3xl my-4'>Show Patient</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{patient.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Age</span>
            <span>{patient.age}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Emergency Contact</span>
            <span>{patient.emergency_contact}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Emergency Contact Relationship</span>
            <span>{patient.ec_relationship}</span>
            </div>
          </div>
      )}
    </div>
  )
}

export default ShowPatient