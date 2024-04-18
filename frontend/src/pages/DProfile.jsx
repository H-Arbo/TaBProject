import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import { Link, useLocation } from 'react-router-dom';
import Dr_Navbar from '../components/Dr_Navbar';
import EditDoctor from './EditDoctor';

const DProfile = () => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const location = useLocation();
  //const { doctor_email } = location.state;

  console.log(location.state.doctor_email);

  const changeToFalse = () => {
    setEditMode(false);
  }

  useEffect(() => {
    setLoading(true);

    Promise.all([
      axios.get('/doctor/info', {email: location.state.doctor_email})//TODO: doctor_email seen as undefined
  ])
      .then(([doctorResponse]) => {
        setDoctor(doctorResponse.data);
        setLoading(false);
      })
      .catch((error) => {
          console.error('Error:', error);
          setLoading(false);
      });
  }, []);

  return (
    <>
      <Dr_Navbar email= {doctor_email}/>
      <div className='p-9 bg-white'>
      <h1 className='flex flex-wrap text-3xl my-4 text-center'>Doctor Profile</h1>
        {loading ? (
          <Loading />
        ) : editMode ? (
          <div>
            <EditDoctor changeToFalse={changeToFalse} />
          </div>
        ) : doctor ? (
          <div className='flex flex-wrap flex-col border border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Doctor Name: <u>{doctor.name}</u></span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Email: <u>{doctor.email}</u></span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Phone Number: <u>{doctor.phone}</u></span>
            </div>
            <button onClick={() => setEditMode(true)} className='text-2x1 text-yellow-600'>Edit Profile</button>
          </div>
        ) : (
          <p>No doctor profile found</p>
        )}
      </div>
    </>
  );
};

export default DProfile;