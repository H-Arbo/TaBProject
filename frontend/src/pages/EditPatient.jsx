import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default ({ changeToFalse }) => {

  return (
    <div>
      <div className='p-4'>
          <div className='border border-sky-400 rounded-xl p-4'>
            <h2 className='text-xl text-gray-700 mb-4'>Secondary Emergency Contact</h2>
              <div className='space-y-2'>
                <p><span className='font-semibold'>Name:</span></p>
                <p><span className='font-semibold'>Cell Phone:</span></p>
                <p><span className='font-semibold'>Work Phone:</span></p>
                <p><span className='font-semibold'>Relation:</span></p>
              </div>
          </div>

          <div className='border border-sky-400 rounded-xl p-4'>
            <h2 className='text-xl text-gray-700 mb-4'>Provider Info</h2>
              <p><span className='font-semibold'>Provider:</span></p>
              <p><span className='font-semibold'>Email:</span></p>
              <p><span className='font-semibold'>Phone:</span></p>
          </div>
      </div>
    </div>
  );
}

//export default EditPatient;