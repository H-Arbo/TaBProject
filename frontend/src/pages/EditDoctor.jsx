import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Dr_Navbar from '../components/Dr_Navbar';

const EditDoctor = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [emergency_contact, setEmergencyContact] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/patients/${id}`)
      .then((response) => {
        setAge(response.data.age);
        setEmergencyContact(response.data.emergency_contact)
        setName(response.data.name)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('Error occured.');
        console.log(error);
      });
  }, [])
  const handleEditPatient = () => {
    const data = {
      name,
      age,
      emergency_contact,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/patients/${id}`, data)
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
    <>
      <Dr_Navbar />
      <div className='p-4'>
        <BackButton />

        <h1 className='text-3xl my-4'>Edit Doctor</h1>
        {loading ? <Loading /> : ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Age</label>
            <input
              type='number'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2  w-full '
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Emergency Contact</label>
            <input
              type='text'
              value={emergency_contact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2  w-full '
            />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditPatient}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditDoctor