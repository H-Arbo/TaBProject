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
  const handleClick = () => { null };

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
        <>
          <div className='flex justify-between items-center'>
            <table className='w-full border-separate border-spacing-1'>
              <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md'> Name </th>
                  <th className='border border-slate-600 rounded-md'> Age </th>
                  <th className='border border-slate-600 rounded-md'> Best Peak Flow </th>
                  <th className='rounded-md'>  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (
                  <tr key={patient._id} className='h-8'>
                    <td className=' roundd-md text-center'>
                      {patient.name}
                    </td>
                    <td className=' roundd-md text-center'>
                      {patient.age}
                    </td>
                    <td className=' roundd-md text-center'>
                      {patient.pr_peak_flow}
                    </td>
                    <td className=' roundd-md text-center'>
                      <Link to='/doctor/patientInfo/changeMedication/:id'>
                        <Button onClick={handleClick} color="darkblue">Change Medication</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex justify-between items-center'>
            <table className='w-full border-separate border-spacing-1'>
              <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md'> Green Zone Peak Flow Max </th>
                  <th className='border border-slate-600 rounded-md'> Green Zone Peak Flow Min </th>
                  <th className='border border-slate-600 rounded-md'> Green Zone Medication </th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (

                  <tr key={patient._id} className='h-8'>
                    <td className=' roundd-md text-center'>
                      {patient.gz_peak_flow_max}
                    </td>
                    <td className=' roundd-md text-center'>
                      {patient.gz_peak_flow_min}
                    </td>
                    <td className=' roundd-md text-center'>
                      {patient.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>



            <table className='w-full border-separate border-spacing-1'>
              <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md'> Yellow Zone Peak Flow Max </th>
                  <th className='border border-slate-600 rounded-md'> Yellow Zone Peak Flow Min </th>
                  <th className='border border-slate-600 rounded-md'> Yellow Zone Medication </th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (

                  <tr key={patient._id} className='h-8'>
                    <td className=' roundd-md text-center'>
                      {patient.yz_peak_flow_max}
                    </td>
                    <td className=' roundd-md text-center'>
                      {patient.yz_peak_flow_min}
                    </td>
                    <td className=' roundd-md text-center'>
                      {patient.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className='w-full border-separate border-spacing-1'>
              <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md'> Red Zone Peak Flow Max </th>
                  <th className='border border-slate-600 rounded-md'> Red Zone Medication </th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (

                  <tr key={patient._id} className='h-8'>
                    <td className=' roundd-md text-center'>
                      {patient.rz_peak_flow_max}
                    </td>
                    <td className=' roundd-md text-center'>
                      {patient.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

export default DPinfo;