import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const PHome = () => {
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
                                        <Link to={'/patients/profile/${patients._id}'}>
                                            <button className='text-2x1 text-green-800'>Patient Profile</button>
                                        </Link>
                                        <Link to={'/patients/edit/${patient._id}'}>
                                            <AiOutlineEdit className='text-2x1 text-yellow-600' />
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

            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3x1 my-8'> Patient Home </h1>
                </div>
            </div>

            <Link to='/patients/green/${patient._id}'>
                <button type='submit' className='p-2 bg-sky-300 m-8'>
                    Green Button
                </button>
            </Link>
            <Link to='/patients/yellow/${patient._id}'>
                <button type='submit' className='p-2 bg-sky-300 m-8'>
                    Yellow Button
                </button>
            </Link>
            <Link to='/patients/red/${patient._id}'>
                <button type='submit' className='p-2 bg-sky-300 m-8'>
                    Red Button
                </button>
            </Link>
            <Link to='/patients/animations/${patient._id}'>
                <button type='submit' className='p-2 bg-sky-300 m-8'>
                    Animations
                </button>
            </Link>
            <Link to='/patients/games/${patient._id}'>
                <button type='submit' className='p-2 bg-sky-300 m-8'>
                    Games
                </button>
            </Link>
            <Link to='/patients/surveys/${patient._id}'>
                <button type='submit' className='p-2 bg-sky-300 m-8'>
                    Surveys
                </button>
            </Link>
            <Link to='/patients/medsheet/${patient._id}'>
                <button type='submit' className='p-2 bg-sky-300 m-8'>
                    Action Sheet
                </button>
            </Link>
        </div>
    );

};

export default PHome