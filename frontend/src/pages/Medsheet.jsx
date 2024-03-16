import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Pat_Navbar from '../components/Pat_Navbar';
import Loading from '../components/Loading';

const Medsheet = () => {

  return (
    <>
      <Pat_Navbar />
      <div className='p-4'>
        <BackButton />

        <h1 className='text-3xl my-4'>Action Sheet</h1>

      </div>
    </>
  );
};

export default Medsheet;