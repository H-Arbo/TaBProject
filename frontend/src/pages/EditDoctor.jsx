import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function EditDoctor({ changeToFalse, doctor_info }) {
  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setDoctorInfo(doctor_info);
    setLoading(false);
  }, []);

  // const fetchDoctorInfo = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get('/profile', { withCredentials: true });
  //     setDoctorInfo({
  //       name: response.data.name,
  //       email: response.data.email,
  //       phone: response.data.phone,
  //     });
  //     setLoading(false);
  //   } catch (error) {
  //     toast.error('Error fetching doctor profile:', error);
  //     setLoading(false);
  //   }
  // };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setDoctorInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const saveDoctor = async () => {
    try {
      await axios.put('/doctor/dprofile/edit', doctorInfo);
      toast.success('Doctor info saved successfully');
      window.location.reload();
      changeToFalse();
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status < 600) {
        toast.error(error.response.data.error);
      } else {
        toast.error('An error occurred. Please try again later.');
      }
      setLoading(false);
    }
  };

  if (loading) return <Loading />; 

  return (
    <div>

      <div className=' text-ffff' style={{ display: 'inline-flex', cursor: "pointer" }} onClick={() => changeToFalse()}>
        Cancel
      </div>

      <div className='flex flex-wrap flex-col border border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Doctor Name:</span>
            <input 
              type="text"
              placeholder="Enter name"
              value={doctorInfo.name}
              onChange={handleInputChange}
              name="name"
              maxLength={50}
            /> 
        </div>

        {/* <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Email: <u></u></span> 
            <input 
              type="text"
              placeholder="Enter email"
              value={doctorInfo.email}
              onChange={handleInputChange}
              name="email"
              maxLength={30}
            />
        </div> */}

        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Phone Number: <u></u></span> 
            <input 
              type="text"
              placeholder="Enter Phone Number"
              value={doctorInfo.phone}
              onChange={handleInputChange}
              name="phone"
              maxLength={11}
            /> 
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
          <div className=' text-ffff' style={{ display: 'inline-flex', cursor: "pointer" }} onClick={saveDoctor}>
            Save
          </div>
        </div>
      </div>
    </div>
  );
}

//export default EditDoctor;