import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { response } from 'express';

function EditPatients () {
  const [data, setData] = useState({
    id: id,
    name: '',
    age: '',
    emergency_contact: ''
  })

  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/patients/` + id)
    .then(response => {
      setData({...data, name: response.data.name, age: response.data.age, emergency_contact: response.data.emergency_contact})
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      alert('Error occured.');
      console.log(error);
    });
  }, [])

  const navigate = useNavigate()

  const handleEditPatient = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.put(`http://localhost:5555/patients/` + id, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Error');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      
      <h1 className='text-3xl my-4'>Edit Patient</h1>
      {loading ? <Loading /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            value={data.name}
            onChange={(e) => setData({...data, name: e.target.value})}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Age</label>
          <input
            type='number'
            value={data.age}
            onChange={(e) => setData({...data, age: e.target.value})}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Emergency Contact</label>
          <input
            type='text'
            value={data.emergency_contact}
            onChange={(e) => setData({...data, emergency_contact: e.target.value})}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditPatient}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditPatients