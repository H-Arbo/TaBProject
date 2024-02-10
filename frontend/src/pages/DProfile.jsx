import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const DProfile = () => {
  const [patient, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true);
      axios
          .get('http://localhost:5555/patients')
          .then((response) => {
              setPatients(response.data.data);
              setLoading(false);
          })
          .catch((error) => {
              console.log(error);
              setLoading(false);
          });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      
      <h1 className='text-3xl my-4'>Doctor Profile</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{patient._id}</span>
          </div>
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
            <span>{patient.ec}</span>
          </div>

          <Link to={'/doctor/edit/${patient._id}'}>
            <button className='text-2x1 text-yellow-600'>Edit Profile</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DProfile;