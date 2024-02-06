import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'


const App = () => {
    const [patients, setPatients] = useState([]);
    const [loadscreen, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5555/patients')
          .then((response) => {
            setPatients(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3x1 my-8'> Patients List </h1>
                <Link to='/patients/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />
                </Link>
            </div>
            {Loading ?  (
                <Loading />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'> No </th>
                            <th className='border border-slate-600 rounded-md'> Name </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'> Emergency Contact </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'> Emergency Contact Relationship </th>
                            <th className='border border-slate-600 rounded-md'> Date </th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={patient._id} className='h-8'>
                                <td className='border border-slate-700 roundd-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center'>
                                    {patient.name}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center max-md:hidden'>
                                    {patient.emergencyContact}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center max-md:hidden'>
                                    {patient.emergencyContactRelationship}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={'patients/details/${patient._id}'}>
                                            <BsInfoCircle className='text-2x1 text-green-800' />
                                        </Link>
                                        <Link to={'patients/edit/${patient._id}'}>
                                            <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                        </Link>
                                        <Link to={'patients/delete/${patient._id}'}>
                                            <MdOutlineDelete className='text-2x1 text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default App