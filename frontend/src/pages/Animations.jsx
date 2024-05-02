import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import Pat_Navbar from "../components/Pat_Navbar";
import { Link, useLocation } from 'react-router-dom';

const Animations = () => {
  const location = useLocation();
  const { pat_email, doctor_email} = location.state;
  return (
    <>
      <Pat_Navbar email= {pat_email} doctor_email ={ doctor_email}/>
      <div className="p-4">
        <h1 className="text-3xl my-4">Animations!</h1>
        <h2>What is Asthma?</h2>
        <iframe src="https://drive.google.com/file/d/1lKXF7XgJuhUoJtfkz4rj4GH5NnP-MNAV/preview" width="640" height="480"></iframe>

        <h2>Asthma Facts and Myths</h2>
        <iframe src="https://drive.google.com/file/d/1d0kPrLbq5uFSk7ryRFjhm848mDpgT-6O/preview" width="640" height="480"></iframe>

        <h2>Inhaler Mastery</h2>
        <iframe src="https://drive.google.com/file/d/1qqNby18z6HbMUOcg-5ZOQWVZvPCm1D-m/preview" width="640" height="480"></iframe>

        <h2>The Asthma Action Plan</h2>
        <iframe src="https://drive.google.com/file/d/1ksvge35VmHSljlTDvLbLiwfeB11_t6Z0/preview" width="640" height="480"></iframe>

        <h2>Navigating Asthma at School</h2>
        <iframe src="https://drive.google.com/file/d/1OHFaDBrxsO4a5gjN8R5pRNLL0iK-5gFY/preview" width="640" height="480"></iframe>

        <h2>Healthy Living with Asthma</h2>
        <iframe src="https://drive.google.com/file/d/13IARRVAYMF_PINXUFeN-A3eYT6uWrN7x/preview" width="640" height="480"></iframe>
      </div >
    </>
  );
};

export default Animations;
