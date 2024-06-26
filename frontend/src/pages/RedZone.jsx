import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Pat_Navbar from "../components/Pat_Navbar";
import { Link, useLocation } from "react-router-dom";

const RedZone = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const location = useLocation();
  const { pat_email, doctor_email } = location.state;
  const changeToFalse = () => {
    setEditMode(false);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .post("/patients/info", { email: pat_email })
      .then((response) => {
        setPatient(response.data.data.at(0));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching patient profile:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Pat_Navbar email={pat_email} doctor_email={doctor_email} />
      <div className="p-9 bg-white">
        {loading ? (
          <Loading />
        ) : patient ? (
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {patient.rz_meds && patient.rz_meds.length > 0 ? (
                <div className="border border-red-600 rounded-md">
                  <h2 className="bg-red-200 text-gray-800 text-lg font-bold p-3 text-center">
                    Red Zone
                  </h2>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-r border-t border-red-600 text-center">
                          Peak Flow Max: {patient.rz_peak_flow_max}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-red-200">
                        <th className="p-3 border-r border-b border-red-600">
                          Medication
                        </th>
                        <th className="p-3 border-r border-b border-red-600">
                          Amount
                        </th>
                        <th className="p-3 border-b border-red-600">
                          Frequency
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {patient.rz_meds.map((medication, index) => (
                        <tr key={index}>
                          <td className="p-3 border-r border-b border-red-600">
                            {medication.med}
                          </td>
                          <td className="p-3 border-r border-b border-red-600">
                            {medication.amount}
                          </td>
                          <td className="p-3 border-b border-red-600">
                            {medication.when_freq}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-2">
                  <h2 className="text-center ">
                    <strong>No Red Zone Medication</strong>
                  </h2>
                  <p className="text-center text-gray-600">
                    If this is a mistake, contact your care provider.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No patient profile found</p>
        )}
      </div>
    </>
  );
};

export default RedZone;
