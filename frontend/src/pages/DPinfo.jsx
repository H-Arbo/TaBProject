import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BackButton from '../components/BackButton';
import { FaBell } from "react-icons/fa6";
import LogoutButton from '../components/LogoutButton';

function DPinfo() {
  const [patients, setPatients] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleClick = () => { null};

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


  const location = useLocation();

  const filteredPatients = patients.filter(patient => {
    if (patient.provider_email && typeof patient.provider_email === 'string') {

      const targetEmail = doctor.email;
      return patient.provider_email.includes(targetEmail) && patient.email.includes(location.state.email);
    }
    return false;
  });

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className='p-4'>
      <BackButton />

      {/* <div>{location.state.email}</div> */}

      <h1 className='text-3xl my-4'>Patient Info</h1>
      {loading ? (
        <Loading />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'> Name </th>
              <th className='border border-slate-600 rounded-md'> Operations </th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (

              <tr key={patient._id} className='h-8'>
                <td className='border border-slate-700 roundd-md text-center'>
                  {patient.name}
                </td>
                <td className='border border-slate-700 roundd-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to='/doctor/patientInfo/changeMedication/:id'>
                      <Button onClick={handleClick} color="darkblue">Change Medication</Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default DPinfo;