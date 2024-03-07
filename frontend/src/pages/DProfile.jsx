import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const DProfile = () => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/profile', { withCredentials: true })
      .then((response) => {
        setDoctor(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching doctor profile:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1>Doctor Profile</h1>
      {loading ? (
        <Loading />
      ) : doctor ? (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Doctor Name: {doctor.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Email: {doctor.email}</span>
          </div>
          <Link to={'/doctor/edit/${patient._id}'}>
            <button className='text-2x1 text-yellow-600'>Edit Profile</button>
          </Link>
        </div>
      ) : (
        <p>No doctor profile found</p>
      )}
    </div>
  );
};

export default DProfile;