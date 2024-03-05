import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PatientProfile = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/profile', { withCredentials: true })
      .then((response) => {
        setPatient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching patient profile:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Patient Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : patient ? (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Patient Name: {patient.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Age: {patient.age}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Emergency Contact: {patient.prim_emergency_contact}</span>
          </div>
        </div>




      ) : (
        <p>No patient profile found</p>
      )}
    </div>
  );
};

export default PatientProfile;
