import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Surveys = () => {
  

  return (
    <div className='p-4'>
      <BackButton />
      
      <h1 className='text-3xl my-4'>Surveys</h1>
    </div>
  );
}

export default Surveys