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

      <div className='container mx-auto'>


        <h1 className='text-3xl my-4'>Patient Info</h1>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className='flex justify-between items-center'>
              <table className='w-full'>
                <thead>
                  <tr classname='bg-gray-200'>
                    <th className='p-3 border border-gray-300'> Name </th>
                    <th className='p-3 border border-gray-300'> Age </th>
                    <th className='p-3 border border-gray-300'> Best Peak Flow </th>
                    <th className='p-3 border border-gray-300'> Operations </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((patient, index) => (
                    <tr key={patient._id} className='h-8'>
                      <td className='p-3 border border-gray-300 text-center'>
                        {patient.name}
                      </td>
                      <td className='p-3 border border-gray-300 text-center'>
                        {patient.age}
                      </td>
                      <td className='p-3 border border-gray-300 text-center'>
                        {patient.pr_peak_flow}
                      </td>
                      <td className='p-3 border border-gray-300 text-center'>
                        <Link to='/doctor/patientInfo/changeMedication/:id'>
                          <Button onClick={handleClick} color="darkblue">Change Medication</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-3"></div>

            <div className='flex justify-between items-center'>
              <div className='border border-green-600 rounded-md'>
                <table className='w-full'>
                  <thead>
                    <tr className='bg-green-200'>
                      <th className='p-3 border border-green-600'> Green Zone Peak Flow Max </th>
                      <th className='p-3 border border-green-600'> Green Zone Peak Flow Min </th>
                      <th className='p-3 border border-green-600'> Green Zone Medication </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((patient, index) => (

                      <tr key={patient._id} className='h-8'>
                        <td className='p-3 border border-green-600 text-center'>
                          {patient.gz_peak_flow_max}
                        </td>
                        <td className='p-3 border border-green-600 text-center'>
                          {patient.gz_peak_flow_min}
                        </td>
                        <td className='p-3 border border-green-600 text-center'>
                          {patient.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mr-2"></div>

              <div className='border border-yellow-600 rounded-md'>
                <table className='w-full'>
                  <thead>
                    <tr className='bg-yellow-200'>
                      <th className='p-3 border border-yellow-600'> Yellow Zone Peak Flow Max </th>
                      <th className='p-3 border border-yellow-600'> Yellow Zone Peak Flow Min </th>
                      <th className='p-3 border border-yellow-600'> Yellow Zone Medication </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((patient, index) => (

                      <tr key={patient._id} className='h-8'>
                        <td className='p-3 border border-yellow-600 text-center'>
                          {patient.yz_peak_flow_max}
                        </td>
                        <td className='p-3 border border-yellow-600 text-center'>
                          {patient.yz_peak_flow_min}
                        </td>
                        <td className='p-3 border border-yellow-600 text-center'>
                          {patient.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mr-2"></div>

              <div className='border border-red-600 rounded-md'>
                <table className='w-full'>
                  <thead>
                    <tr className='bg-red-200'>
                      <th className='p-3 border border-red-600'> Red Zone Peak Flow Max </th>
                      <th className='p-3 border border-red-600'> Red Zone Medication </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((patient, index) => (

                      <tr key={patient._id} className='h-8'>
                        <td className='p-3 border border-red-600 text-center'>
                          {patient.rz_peak_flow_max}
                        </td>
                        <td className='p-3 border border-red-600 text-center'>
                          {patient.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DPinfo;