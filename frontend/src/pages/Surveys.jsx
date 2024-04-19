import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate, useParams, Link, useLocation  } from 'react-router-dom';
import Pat_Navbar from '../components/Pat_Navbar';
import Button from '../components/Button';


const Surveys = () => {
  const location = useLocation();
  const { pat_email } = location.state;

  return (
    <>
      <Pat_Navbar email={pat_email}/>
      <div className='p-4'>


        <h1 className='text-3xl my-4 text-center'>Click on the links below to take the surveys</h1>

        <div className='flex justify-center items-center p-2'>
          <Link to="https://universityofalabama.az1.qualtrics.com/jfe/form/SV_dbtqoTw1Y4PFXeu" className='pr-2'>
            <Button color={"blue"}>
              Survey 1
            </Button>
          </Link>
          <Link to="https://universityofalabama.az1.qualtrics.com/jfe/form/SV_bvd8RUBgUmtEp8O" className='pr-2'>
            <Button color={"blue"}>
              Survey 2
            </Button>
          </Link>
          <Link to="https://universityofalabama.az1.qualtrics.com/jfe/form/SV_0BMt49QCFttBY0u">
            <Button color={"blue"}>
              Survey 3
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Surveys