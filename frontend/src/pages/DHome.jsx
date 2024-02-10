import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BackButton from '../components/BackButton';


const DHome = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
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
            <BackButton/>
            
            <div className='flex justify-between items-center'>
                <h1 className='text-3x1 my-8'> Patients List (Dr Home) </h1>
                <Link to='/doctor/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />
                </Link>
                <Link to='/doctor/profile/${patient._id}'>
                    <button className='p-2 bg-sky-300 m-8'>
                        Doctor Profile
                    </button>
                </Link>
            </div>
            {loading ? (
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
                            <th className='border border-slate-600 rounded-md'> Operations </th>

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
                                    {patient.emergency_contact}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center max-md:hidden'>
                                    {patient.ec_relationship}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center max-md:hidden'>
                                    {patient.date}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={'/doctor/patientInfo/${patient._id}'}>
                                            <button className='text-2x1 text-green-800'>Patient Info</button>
                                        </Link>
                                        <Link to={'/doctor/message/${patient._id}'}>
                                            <button className='text-2x1 text-red-600'> Message Patient</button>
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

export default DHome