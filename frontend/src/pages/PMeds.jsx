import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Dr_Navbar from '../components/Dr_Navbar';

const PMeds = () => {
  return (
    <>
      <Dr_Navbar />
      <div className='p-4'>

        <h1 className='text-3xl my-4'>Change Patient Medications</h1>
        <h1 className='text-3xl my-4'>Green Zone</h1>
        <h1 className='text-3xl my-4'>Yellow Zone</h1>
        <h1 className='text-3xl my-4'>Red Zone</h1>
      </div>
    </>
  );
}

export default PMeds