import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Dr_Navbar from '../components/Dr_Navbar';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete, MdOutlinePerson } from 'react-icons/md';
import BackButton from '../components/BackButton';
import { FaBell } from "react-icons/fa6";
import LogoutButton from '../components/LogoutButton';

const DHome = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
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

    return (
        <>
            <Dr_Navbar />

            <div className='p-4'>
                <BackButton className='mb-2'/>

                {loading ? (
                    <Loading />
                ) : (
                    <table className='w-full border-collapse mt-2'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='border border-gray-300 px-4 py-2'> No. </th>
                                <th className='border border-gray-300 px-4 py-2'> Name </th>
                                <th className='border border-gray-300 px-4 py-2 hidden md:table-cell'> Age </th>
                                <th className='border border-gray-300 px-4 py-2 hidden md:table-cell'> Provider Email </th>
                                <th className='border border-gray-300 px-4 py-2'> Operations </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPatients.map((patient, index) => (
                                <tr key={patient._id} className='bg-white'>
                                    <td className='border border-gray-300 px-4 py-2 text-center'>
                                        {index + 1}
                                    </td>
                                    <td className='border border-gray-300 px-4 py-2'>
                                        {patient.name}
                                    </td>
                                    <td className='border border-gray-300 px-4 py-2 hidden md:table-cell text-center'>
                                        {patient.age}
                                    </td>
                                    <td className='border border-gray-300 px-4 py-2 hidden md:table-cell'>
                                        {patient.provider_email}
                                    </td>
                                    <td className='border border-gray-300 px-4 py-2'>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            <Link to="/doctor/patientInfo" state={{ id: 1, email: patient.email }} className="text-blue-600 hover:underline">Patient Info</Link>
                                            <Link to={`/doctor/message/${patient._id}`} className="text-green-600 hover:underline">Message Patient</Link>
                                            <Link to={`/patients/delete/${patient._id}`} className="text-red-600 hover:underline">
                                                <MdOutlineDelete className='text-red-600' />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                )}
            </div>
        </>
    );
};

export default DHome