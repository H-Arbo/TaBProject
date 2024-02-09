import React from 'react';
import BackButton from '../components/BackButton';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PRegister() {
  return (
    <div className='p-4'>
      <div>Patient Registration</div>

      <Link to='/patients/login'>
        <button type='submit' className='p-2 bg-sky-300 m-8'>
          Submit
        </button>
      </Link>
    </div>
  )
}
