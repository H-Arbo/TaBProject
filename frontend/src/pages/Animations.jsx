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
        <h2>Animation 4</h2>
        <iframe src="https://drive.google.com/file/d/1IBHCtlmqgmgj4ZW3g-eo_2u-P8ugPk11/preview" width="640" height="480"></iframe>

        <h2>Animation 5</h2>
        <iframe src="https://drive.google.com/file/d/1dwJ3rt5Dkd0WQxIU5W4CtkPewPobrQ3O/preview" width="640" height="480"></iframe>

        <h2>Animation 6</h2>
        <iframe src="https://drive.google.com/file/d/1JoRnS-ftWSnfLHgGOrULS25LJgcBvd6h/preview" width="640" height="480"></iframe>

        <h2>Animation 7</h2>
        <iframe src="https://drive.google.com/file/d/1TNGO4FU7mmg_BY7pH47I5fcK1cdOwXmz/preview" width="640" height="480"></iframe>
      </div >
    </>
  );
};

export default Animations;
