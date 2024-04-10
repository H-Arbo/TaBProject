import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import Pat_Navbar from '../components/Pat_Navbar';
import { MdHistoryEdu } from "react-icons/md";
import EditPatient from './EditPatient';

const PatientProfile = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const changeToFalse = () => {
    setEditMode(false);
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/profile', { withCredentials: true })
      .then((response) => {
        setPatient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching patient profile:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Pat_Navbar />
      <div className='p-9'>

        <h1 className='text-3xl my-4 text-center'>Patient Profile</h1>

        { loading ? (
          <Loading />
        ) : editMode ? (
          <div>
            <EditPatient changeToFalse={changeToFalse} />
          </div>
        ) : patient ? (
          <div>
                
            <div className='pb-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='border border-sky-400 rounded-xl p-4'>
                  <h2 className='text-xl text-gray-700 mb-4'>Basic Information</h2>
                  <div className='space-y-2'>
                    <p><span className='font-semibold'>Patient Name:</span> {patient.name}</p>
                    <p><span className='font-semibold'>Age:</span> {patient.age}</p>
                    <p><span className='font-semibold'>Best Peak Flow:</span> {patient.pr_peak_flow}</p>
                  </div>
                </div>

                <div className='border border-sky-400 rounded-xl p-4'>
                  <h2 className='text-xl text-gray-700 mb-4'>Primary Emergency Contact</h2>
                  <div className='space-y-2'>
                    <p><span className='font-semibold'>Primary Contact:</span> {patient.prim_emergency_contact}</p>
                    <p><span className='font-semibold'>Email:</span> {patient.email}</p>
                    <p><span className='font-semibold'>Cell Phone:</span> {patient.prim_ec_cell}</p>
                    <p><span className='font-semibold'>Work Phone:</span> {patient.prim_ec_work}</p>
                    <p><span className='font-semibold'>Relation:</span> {patient.prim_ec_relationship}</p>
                  </div>
                </div>

                <div className='border border-sky-400 rounded-xl p-4'>
                  <h2 className='text-xl text-gray-700 mb-4'>Secondary Emergency Contact</h2>
                  <div className='space-y-2'>
                    <p><span className='font-semibold'>Name:</span> {patient.sec_emergency_contact}</p>
                    <p><span className='font-semibold'>Cell Phone:</span> {patient.sec_ec_cell}</p>
                    <p><span className='font-semibold'>Work Phone:</span> {patient.sec_ec_work}</p>
                    <p><span className='font-semibold'>Relation:</span> {patient.sec_ec_relationship}</p>
                  </div>
                </div>

                <div className='border border-sky-400 rounded-xl p-4'>
                  <h2 className='text-xl text-gray-700 mb-4'>Provider Info</h2>
                  <p><span className='font-semibold'>Provider:</span> {patient.provider}</p>
                  <p><span className='font-semibold'>Email:</span> {patient.provider_email}</p>
                  <p><span className='font-semibold'>Phone:</span> {patient.provider_phone}</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
              <div className=' text-ffff' style={{ display: 'inline-flex', cursor: "pointer" }} onClick={() => setEditMode(true)}>
                <MdHistoryEdu className="text-4x1 h-6 w-6"/> 
                <span>Edit Profile</span>
              </div>
            </div>

            <div>
              <div className='pt-4 flex justify-between items-start'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {patient.gz_meds && patient.gz_meds.length > 0 && (
                    <div className='border border-green-600 rounded-md'>
                      <h2 className='bg-green-200 text-gray-800 text-lg font-bold p-3 text-center'>Green Zone</h2>
                      <table className='w-full'>
                        <tbody>
                          <tr>
                            <td className='p-3 border-b border-r border-t border-green-600 text-center'>Peak Flow Max: {patient.gz_peak_flow_max}</td>
                            <td className='p-3 border-b border-t border-green-600 text-center'>Peak Flow Min: {patient.gz_peak_flow_min}</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className='w-full'>
                        <thead>
                          <tr className='bg-green-200'>
                            <th className='p-3 border-r border-b border-green-600'>Medication</th>
                            <th className='p-3 border-r border-b border-green-600'>Amount</th>
                            <th className='p-3 border-b border-green-600'>Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patient.gz_meds.map((medication, index) => (
                            <tr key={index}>
                              <td className='p-3 border-r border-b border-green-600'>{medication.med}</td>
                              <td className='p-3 border-r border-b border-green-600'>{medication.amount}</td>
                              <td className='p-3 border-b border-green-600'>{medication.when_freq}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {patient.yz_meds && patient.yz_meds.length > 0 && (
                    <div className='border border-yellow-600 rounded-md'>
                      <h2 className='bg-yellow-200 text-gray-800 text-lg font-bold p-3 text-center'>Yellow Zone</h2>
                      <table className='w-full'>
                        <tbody>
                          <tr>
                            <td className='p-3 border-b border-r border-t border-yellow-600 text-center'>Peak Flow Max: {patient.yz_peak_flow_max}</td>
                            <td className='p-3 border-b border-t border-yellow-600 text-center'>Peak Flow Min: {patient.yz_peak_flow_min}</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className='w-full'>
                        <thead>
                          <tr className='bg-yellow-200'>
                            <th className='p-3 border-r border-b border-yellow-600'>Medication</th>
                            <th className='p-3 border-r border-b border-yellow-600'>Amount</th>
                            <th className='p-3 border-b border-yellow-600'>Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patient.yz_meds.map((medication, index) => (
                            <tr key={index}>
                              <td className='p-3 border-r border-b border-yellow-600'>{medication.med}</td>
                              <td className='p-3 border-r border-b border-yellow-600'>{medication.amount}</td>
                              <td className='p-3 border-b border-yellow-600'>{medication.when_freq}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {patient.rz_meds && patient.rz_meds.length > 0 && (
                    <div className='border border-red-600 rounded-md'>
                      <h2 className='bg-red-200 text-gray-800 text-lg font-bold p-3 text-center'>Red Zone</h2>
                      <table className='w-full'>
                        <tbody>
                          <tr>
                            <td className='p-3 border-b border-r border-t border-red-600 text-center'>Peak Flow Max: {patient.rz_peak_flow_max}</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className='w-full'>
                        <thead>
                          <tr className='bg-red-200'>
                            <th className='p-3 border-r border-b border-red-600'>Medication</th>
                            <th className='p-3 border-r border-b border-red-600'>Amount</th>
                            <th className='p-3 border-b border-red-600'>Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patient.rz_meds.map((medication, index) => (
                            <tr key={index}>
                              <td className='p-3 border-r border-b border-red-600'>{medication.med}</td>
                              <td className='p-3 border-r border-b border-red-600'>{medication.amount}</td>
                              <td className='p-3 border-b border-red-600'>{medication.when_freq}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No patient profile found</p>
        )}
      </div>
    </>
  );
};

export default PatientProfile;
