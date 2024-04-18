import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link, useLocation} from "react-router-dom";
import Dr_Navbar from "../components/Dr_Navbar";
import Button from "../components/Button";

function DPinfo() {
  const [patients, setPatients] = useState([]);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { doctor_email } = location.state;
  const handleClick = () => {
    null;
  };

  useEffect(() => {
    setLoading(true);

    Promise.all([
      axios.get("/patients")
    ])
      .then(([patientsResponse]) => {
        setPatients(patientsResponse.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);


  const filteredPatients = patients.filter((patient) => {
    if (patient.provider_email && typeof patient.provider_email === "string") {
      const targetEmail = doctor_email;
      return (
        patient.provider_email.includes(targetEmail) &&
        patient.email.includes(location.state.email)
      );
    }
    return false;
  });

  return (
    <>
      <Dr_Navbar />
      <div className="p-9 bg-white">
        <h1 className="flex flex-wrap text-3xl my-4 text-center">
          Patient Info
        </h1>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="flex flex-wrap justify-between items-center">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 border border-gray-300"> Name </th>
                    <th className="p-3 border border-gray-300"> Age </th>
                    <th className="p-3 border border-gray-300">
                      {" "}
                      Best Peak Flow{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((patient, index) => (
                    <tr key={patient._id}>
                      <td className="p-3 border border-gray-300 text-center">
                        {patient.name}
                      </td>
                      <td className="p-3 border border-gray-300 text-center">
                        {patient.age}
                      </td>
                      <td className="p-3 border border-gray-300 text-center">
                        {patient.gz_peak_flow_max}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-4"></div>

            <div className="flex flex-wrap justify-between items-start">
              <div className="border border-green-600 rounded-md">
                <h2 className="flex justify-center items-center bg-green-200 h-10">
                  <b className="text-center">Green Zone</b>
                  <div className="p-6">
                    <Link
                      to="/doctor/patientInfo/changeGreenMeds/"
                      state={{ pInfo: filteredPatients }}
                    >
                      <button onClick={handleClick} color="darkblue">
                        (Change Green Zone)
                      </button>
                    </Link>
                  </div>
                </h2>

                <table className="w-full">
                  <tbody>
                    {filteredPatients.map((patient, index) => (
                      <tr key={patient._id}>
                        <td className="p-3 border-t border-r border-b border-green-600 text-center">
                          {" "}
                          Peak Flow Max: {patient.gz_peak_flow_max}
                        </td>
                        <td className="p-3 border-t border-b border-green-600 text-center">
                          {" "}
                          Peak Flow Min: {patient.gz_peak_flow_min}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="p-3 border-r border-green-600">
                        Medication
                      </th>
                      <th className="p-3 border-r border-green-600">Amount</th>
                      <th className="p-3">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((patient) =>
                      patient.gz_meds.map((medication, index) => (
                        <tr key={index}>
                          <td className="p-3 border-r border-t border-green-600">
                            {medication.med}
                          </td>
                          <td className="p-3 border-r border-t border-green-600">
                            {medication.amount}
                          </td>
                          <td className="p-3 border-t border-green-600">
                            {medication.when_freq}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mr-4"></div>

              <div className="border border-yellow-600 rounded-md">
                <h2 className="flex justify-center items-center bg-yellow-200 h-10">
                  <b className="text-center">Yellow Zone</b>
                  <div className="p-6">
                    <Link
                      to="/doctor/patientInfo/changeYellowMeds/"
                      state={{ pInfo: filteredPatients }}
                    >
                      <button onClick={handleClick} color="darkblue">
                        (Change Yellow Zone)
                      </button>
                    </Link>
                  </div>
                </h2>

                <table className="w-full">
                  <tbody>
                    {filteredPatients.map((patient, index) => (
                      <tr key={patient._id}>
                        <td className="p-3 border-t border-r border-b border-yellow-600 text-center">
                          {" "}
                          Peak Flow Max: {patient.yz_peak_flow_max}
                        </td>
                        <td className="p-3 border-t border-b border-yellow-600 text-center">
                          {" "}
                          Peak Flow Min: {patient.yz_peak_flow_min}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="w-full">
                  <thead>
                    <tr className="bg-yellow-200">
                      <th className="p-3 border-r border-yellow-600">
                        Medication
                      </th>
                      <th className="p-3 border-r border-yellow-600">Amount</th>
                      <th className="p-3">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((patient) =>
                      patient.yz_meds.map((medication, index) => (
                        <tr key={index}>
                          <td className="p-3 border-r border-t border-yellow-600">
                            {medication.med}
                          </td>
                          <td className="p-3 border-r border-t border-yellow-600">
                            {medication.amount}
                          </td>
                          <td className="p-3 border-t border-yellow-600">
                            {medication.when_freq}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mr-4"></div>

              <div className="border border-red-600 rounded-md">
                <h2 className="flex justify-center items-center bg-red-200 h-10">
                  <b className="text-center">Red Zone</b>
                  <div className="p-6">
                    <Link
                      to="/doctor/patientInfo/changeRedMeds/"
                      state={{ pInfo: filteredPatients }}
                    >
                      <button onClick={handleClick} color="darkblue">
                        (Change Red Zone)
                      </button>
                    </Link>
                  </div>
                </h2>

                <table className="w-full">
                  <tbody>
                    {filteredPatients.map((patient, index) => (
                      <tr key={patient._id}>
                        <td className="p-3 border-t border-r border-b border-red-600 text-center">
                          {" "}
                          Peak Flow Max: {patient.rz_peak_flow_max}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="w-full">
                  <thead>
                    <tr className="bg-red-200">
                      <th className="p-3 border-r border-red-600">
                        Medication
                      </th>
                      <th className="p-3 border-r border-red-600">Amount</th>
                      <th className="p-3">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((patient) =>
                      patient.rz_meds.map((medication, index) => (
                        <tr key={index}>
                          <td className="p-3 border-r border-t border-red-600">
                            {medication.med}
                          </td>
                          <td className="p-3 border-r border-t border-red-600">
                            {medication.amount}
                          </td>
                          <td className="p-3 border-t border-red-600">
                            {medication.when_freq}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DPinfo;
