import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BackButton from '../components/BackButton';
import { FaBell } from "react-icons/fa6";
import LogoutButton from '../components/LogoutButton';

const DHome = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        setLoading(true);
    
        Promise.all([
            axios.get('http://localhost:5555/patients'),
            axios.get('http://localhost:5555/profile', { withCredentials: true })
        ])
        .then(([patientsResponse, profileResponse]) => {
            setPatients(patientsResponse.data.data);
            setDoctor(profileResponse.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error:', error);
            setLoading(false);
        });
    }, []);
    

    const filteredPatients = patients.filter(patient => {
        if (patient.provider_email && typeof patient.provider_email === 'string') {
            
            const targetEmail = doctor.email;
            return patient.provider_email.includes(targetEmail);
        }
        return false;
    });

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    return (

        <div className='p-4'>
            <BackButton />
            <LogoutButton />

            <div className='flex justify-between items-center'>
                <h1 className='text-3x1 my-8'> Patients List (Dr Home) </h1>
                <Link to='/doctor/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />
                </Link>
                <Link to='/doctor/profile'>
                    <button className='p-2 bg-sky-300 m-8'>
                        Doctor Profile
                    </button>
                </Link>
                <Link to='/doctor/alerts/${doctor._id}'>
                    <FaBell />
                </Link>
            </div>

            <input
                value={searchText}
                onChange={handleSearchChange}
            />

            {loading ? (
                <Loading />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'> No. </th>
                            <th className='border border-slate-600 rounded-md'> Name </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'> Emergency Contact </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'> Provider Email </th>
                            <th className='border border-slate-600 rounded-md'> Operations </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map((patient, index) => (
                            <tr key={patient._id} className='h-8'>
                                <td className='border border-slate-700 roundd-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center'>
                                    {patient.name}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center max-md:hidden'>
                                    {patient.prim_emergency_contact}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center max-md:hidden'>
                                    {patient.provider_email}
                                </td>
                                <td className='border border-slate-700 roundd-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={'/doctor/patientInfo/${patient._id}'}>
                                            <button className='text-2x1 text-green-800'>Patient Info</button>
                                        </Link>
                                        <Link to={'/doctor/message/${patient._id}'}>
                                            <button className='text-2x1 text-red-600'> Message Patient</button>
                                        </Link>
                                        <Link to={'/patients/delete/${patient._id}'}>
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

export default DHome