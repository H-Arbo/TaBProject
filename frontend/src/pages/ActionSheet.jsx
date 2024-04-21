import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import BackButton from "../components/BackButton";
import Pat_Navbar from "../components/Pat_Navbar";
import Loading from "../components/Loading";
import asthma_logo from "/images/AAAAI_logo.png";
import { Link, useLocation } from "react-router-dom";

const ActionSheet = () => {
  const [patient, setPatient] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { pat_email, doctor_email } = location.state;

  useEffect(() => {
    setLoading(true);

    Promise.all([
      axios.post("/patients/info", { email: pat_email }),
      axios.post("/doctor/info", { email: location.state.doctor_email }),
    ])
      .then(([patientInfo, doctorInfo]) => {
        setPatient(patientInfo.data.data.at(0));
        setDoctor(doctorInfo.data.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
    // axios
    //   .post('/patients/info', {email: pat_email})
    //   .then((response) => {
    //     setPatient(response.data.data.at(0));
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching patient profile:', error);
    //     setLoading(false);
    //   });
  }, []);

  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;

    const pdfWidth = 8.5;
    const pdfHeight = 11;

    html2canvas(input, { scrollX: 0, scrollY: -window.scrollY }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const contentWidth = canvas.width / 96;
        const contentHeight = canvas.height / 96;

        const pdf = new jsPDF("portrait", "in", [pdfWidth, pdfHeight]);

        const scaleFactor = Math.min(
          pdfWidth / contentWidth,
          pdfHeight / contentHeight
        );

        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          contentWidth * scaleFactor,
          contentHeight * scaleFactor
        );
        pdf.save("ActionSheet.pdf");
      }
    );
  };

  return (
    <>
      <Pat_Navbar email={pat_email} doctor_email={doctor_email} />
      <div className="p-4 items-center justify-center">
        <div className="flex justify-end">
          <button
            style={{
              border: "1px solid #ccc",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
            onClick={downloadPDF}
          >
            Download Action Sheet
          </button>
        </div>

        <div ref={pdfRef}>
          <div className="flex items-center justify-center mx-auto">
            {loading ? (
              <Loading />
            ) : patient ? (
              <>
                <div className="items-center justify-center">
                  <div
                    className="p-2 justify-center mx-auto"
                    style={{
                      width: "85%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <img
                        src={asthma_logo}
                        alt="Asthma Logo"
                        style={{ width: "200px", height: "auto" }}
                      />
                    </div>

                    <div>
                      <div style={{ minWidth: "300px" }}>
                        <div className="border border-gray-400 rounded-xl p-4">
                          <div className="space-y-2">
                            <div className="flex">
                              <p className="mr-4">
                                <span className="font-semibold">
                                  Patient Name:{" "}
                                </span>{" "}
                                <u>{patient.name}</u>
                              </p>
                              <p className="mr-4">
                                <span className="font-semibold">Age: </span>{" "}
                                <u>{patient.age}</u>
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Personal Best Peak Flow:{" "}
                                </span>{" "}
                                <u>{patient.gz_peak_flow_max}</u>
                              </p>
                            </div>
                            <div className="flex">
                              <p className="mr-4">
                                <span className="font-semibold">
                                  Primary Emergency Contact:{" "}
                                </span>{" "}
                                <u>{patient.prim_emergency_contact}</u>
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Relationship:{" "}
                                </span>{" "}
                                <u>{patient.prim_ec_relationship}</u>
                              </p>
                            </div>
                            <div className="flex">
                              <p className="mr-4">
                                <span className="font-semibold">
                                  Cell Phone:{" "}
                                </span>{" "}
                                <u>{patient.prim_ec_cell}</u>
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Work Phone:{" "}
                                </span>{" "}
                                <u>{patient.prim_ec_work}</u>
                              </p>
                            </div>
                            <div className="flex">
                              <p className="mr-4">
                                <span className="font-semibold">
                                  Health Care Provider:{" "}
                                </span>{" "}
                                <u>{doctor.name}</u>
                              </p>
                              <p>
                                <span className="font-semibold">Phone: </span>{" "}
                                <u>{doctor.phone}</u>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-green-100 justify-center mx-auto p-2"
                    style={{
                      maxWidth: "90%",
                      display: "flex",
                      flexDirection: "row",
                      overflowX: "auto",
                    }}
                  >
                    <div className="p-2">
                      <h1 style={{ fontSize: "20px" }}>
                        <strong>Green Zone:</strong>
                      </h1>
                      <h2 className="font-semibold">Doing well</h2>
                      <ul>
                        <li>
                          No coughing, wheezing, chest tightness, or difficulty
                          breathing
                        </li>
                        <li>
                          Can work, play, exercise, perform usual activities
                          without symptoms
                        </li>
                      </ul>
                      <i className="font-semibold">OR</i>
                      <ul>
                        <li>
                          Peak flow <u>{patient.gz_peak_flow_min}</u> to{" "}
                          <u>{patient.gz_peak_flow_max}</u>
                        </li>
                        <li>
                          <i>(80% to 100% of personal best)</i>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3">
                      <h1 className="p-2">
                        Take these medications every day for control and
                        maintenance:
                      </h1>
                      {patient.gz_meds && patient.gz_meds.length > 0 ? (
                        <div className="border border-green-600 overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-green-300">
                                <th className="p-3 border-r border-b border-green-600">
                                  Medicine
                                </th>
                                <th className="p-3 border-r border-b border-green-600">
                                  How much to take
                                </th>
                                <th className="p-3 border-b border-green-600">
                                  When and how often
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {patient.gz_meds.map((medication, index) => (
                                <tr key={index}>
                                  <td className="p-3 border-r border-b border-green-600">
                                    {medication.med}
                                  </td>
                                  <td className="p-3 border-r border-b border-green-600">
                                    {medication.amount}
                                  </td>
                                  <td className="p-3 border-b border-green-600">
                                    {medication.when_freq}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div>
                          <h2 className="text-center ">
                            <strong>No Green Zone Medication</strong>
                          </h2>
                          <p className="text-center text-gray-600">
                            If this is a mistake, contact your care provider.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className="bg-yellow-100 p-2 mx-auto"
                    style={{
                      maxWidth: "90%",
                      display: "flex",
                      flexDirection: "row",
                      overflowX: "auto",
                    }}
                  >
                    <div className="p-2">
                      <h1 style={{ fontSize: "20px" }}>
                        <strong>Yellow Zone:</strong>
                      </h1>
                      <h2 className="font-semibold">Caution/Getting Worse</h2>
                      <ul>
                        <li>
                          Coughing, wheezing, chest tightness, or difficulty
                          breathing
                        </li>
                        <li>
                          Symptoms with daily activities, work, play, and
                          exercise
                        </li>
                        <li>Nighttime awakenings with symptoms</li>
                      </ul>
                      <i className="font-semibold">OR</i>
                      <ul>
                        <li>
                          Peak flow <u>{patient.yz_peak_flow_min}</u> to{" "}
                          <u>{patient.yz_peak_flow_max}</u>
                        </li>
                        <li>
                          <i>(50% to 80% of personal best)</i>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3">
                      <h1 className="p-2">
                        CONTINUE your Green Zone medications PLUS take these
                        quick relief medications:
                      </h1>
                      {patient.yz_meds && patient.yz_meds.length > 0 ? (
                        <div className="p-3">
                          <div className="border border-yellow-600 overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="bg-yellow-300">
                                  <th className="p-3 border-r border-b border-yellow-600">
                                    Medicine
                                  </th>
                                  <th className="p-3 border-r border-b border-yellow-600">
                                    How much to take
                                  </th>
                                  <th className="p-3 border-b border-yellow-600">
                                    When and how often
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white">
                                {patient.yz_meds.map((medication, index) => (
                                  <tr key={index}>
                                    <td className="p-3 border-r border-b border-yellow-600">
                                      {medication.med}
                                    </td>
                                    <td className="p-3 border-r border-b border-yellow-600">
                                      {medication.amount}
                                    </td>
                                    <td className="p-3 border-b border-yellow-600">
                                      {medication.when_freq}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <h2>
                            <strong>
                              Call your doctor if you have been in the yellow
                              zone for more than 24 hours.
                            </strong>
                          </h2>
                          <div>
                            Also call your doctor if:{" "}
                            <u>{patient.yz_comment}</u>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3">
                          <h2 className="text-center ">
                            <strong>No Yellow Zone Medication</strong>
                          </h2>
                          <p className="text-center text-gray-600">
                            If this is a mistake, contact your care provider.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className="bg-red-100 p-2 mx-auto"
                    style={{
                      maxWidth: "90%",
                      display: "flex",
                      flexDirection: "row",
                      overflowX: "auto",
                    }}
                  >
                    <div className="p-2">
                      <h1 style={{ fontSize: "20px" }}>
                        <strong>Red Zone:</strong>
                      </h1>
                      <h2 className="font-semibold">Alert!</h2>
                      <ul>
                        <li>
                          Difficulty breathing, coughing, wheezing not helped
                          with medications
                        </li>
                        <li>
                          Trouble walking or talking due to asthma symptoms
                        </li>
                        <li>Not responding to quick relief medication</li>
                      </ul>
                      <i className="font-semibold">OR</i>
                      <ul>
                        <li>
                          Peak flow is less than{" "}
                          <u>{patient.rz_peak_flow_max}</u>
                        </li>
                        <li>
                          <i>(50% of personal best)</i>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3">
                      <h1>
                        <strong>
                          FOR EXTREME TROUBLE BREATHING/SHORTNESS OF BREATH GET
                          IMMEDIATE HELP!
                        </strong>
                      </h1>
                      <h1 className="p-2">
                        Take these quick relief medications:
                      </h1>
                      {patient.rz_meds && patient.rz_meds.length > 0 && (
                        <div className="border border-red-600 overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-red-300">
                                <th className="p-3 border-r border-b border-red-600">
                                  Medicine
                                </th>
                                <th className="p-3 border-r border-b border-red-600">
                                  How much to take
                                </th>
                                <th className="p-3 border-b border-red-600">
                                  When and how often
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
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
                      )}
                      <h1 className="flex items-center justify-center">
                        <strong>CALL your doctor NOW.</strong>
                      </h1>
                      <h1 className="flex items-center justify-center">
                        <strong>
                          GO to the hospital/emergency department or CALL for an
                          ambulance NOW!
                        </strong>
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-center text-gray-600">
                No patient profile found
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionSheet;
