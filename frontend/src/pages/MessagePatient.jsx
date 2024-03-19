import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Dr_Navbar from '../components/Dr_Navbar';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const MessagePatient = () => {


  return (
    <>
      <Dr_Navbar />
      <div className='p-4'>

        <h1 className='text-3xl my-4'>Message Patient</h1>
      </div>
    </>
  );
}

export default MessagePatient