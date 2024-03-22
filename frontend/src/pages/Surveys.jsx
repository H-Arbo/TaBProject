import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Pat_Navbar from '../components/Pat_Navbar';

const Surveys = () => {


  return (
    <>
      <Pat_Navbar />
      <div className='p-4'>

        <h1 className='text-3xl my-4'>Surveys</h1>
      </div>

      <p>Click on the links below to take the surveys</p>
      <Link to="https://universityofalabama.az1.qualtrics.com/jfe/form/SV_dbtqoTw1Y4PFXeu">Survey 1</Link>
      <Link to="https://universityofalabama.az1.qualtrics.com/jfe/form/SV_bvd8RUBgUmtEp8O">Survey 2</Link>
      <Link to="https://universityofalabama.az1.qualtrics.com/jfe/form/SV_0BMt49QCFttBY0u">Survey 3</Link>
    </>
  );
}

export default Surveys