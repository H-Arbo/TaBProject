import React from 'react'
import BackButton from '../components/BackButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DLogin() {
  return (
    <div className='p-4'>
      <BackButton/>
      
      <div>Doctor Login</div>
          <Link to = '/doctor/home'>
            <button type='submit' className='p-2 bg-sky-300 m-8'>
              Submit
            </button>
          </Link>
    </div>
  )
}
