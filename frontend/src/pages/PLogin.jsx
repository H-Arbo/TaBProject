import React from 'react';
import BackButton from "../components/BackButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import './css/characters.css'

export default function PLogin() {
  const nav = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginPatient = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/patients/login", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
        setData({ email: "", password: '' });
      } else {
        setData({});
        nav("/patients/home" , { state: { pat_email: email } });
      }
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div className="p-4">
      <BackButton />

      <div className="pt-2">
        <div className="flex flex-col border-2 border-sky-400 rounded-xl max-w-[600px] p-4 mx-auto">
          <h1 className="text-3xl my-4">Patient Login</h1>
          <form onSubmit={loginPatient}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value.toLowerCase() })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              maxLength={30}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2  w-full "
              maxLength={15}
            />

            <button type="submit" className="p-2 bg-sky-300 m-8">
              Login
            </button>

          </form>

        </div>
      </div>
      <div className='p-8 flex justify-center'>
        <img src='/images/Laila-Path.png' alt="/images/Laila-Path.png" style={{
          maxWidth: '50%',
          height: 'auto',
          paddingLeft: '25px',
        }} className='front' />
      </div>
    </div>
  );
}
