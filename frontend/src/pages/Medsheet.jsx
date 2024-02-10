import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';

const Medsheet = () => {

  return (
    <div className='p-4'>
      <BackButton />
      
      <h1 className='text-3xl my-4'>Action Sheet</h1>
      
    </div>
  );
};

export default Medsheet;