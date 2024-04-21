import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import axios from "axios";
import toast from "react-hot-toast";

export default function EditPatient({ pat_email, changeToFalse }) {
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    age: "",
    email: "",
    prim_emergency_contact: "",
    prim_ec_cell: "",
    prim_ec_relationship: "",
    prim_ec_work: "",
    sec_emergency_contact: "",
    sec_ec_cell: "",
    sec_ec_relationship: "",
    sec_ec_work: "",
    provider_email: "",
  });

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchPatientInfo();
  // }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .post("/patients/info", { email: pat_email })
      .then((response) => {
        setPatientInfo(response.data.data.at(0));
        console.log(response.data.data.at(0));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching patient profile:", error);
        setLoading(false);
      });
  }, []);
  // const fetchPatientInfo = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get("/profile", { withCredentials: true });
  //     setPatientInfo({
  //       name: response.data.name,
  //       age: response.data.age,
  //       email: response.data.email,
  //       pr_peak_flow: response.data.pr_peak_flow,
  //       prim_emergency_contact: response.data.prim_emergency_contact,
  //       prim_ec_cell: response.data.prim_ec_cell,
  //       prim_ec_relationship: response.data.prim_ec_relationship,
  //       prim_ec_work: response.data.prim_ec_work,
  //       sec_emergency_contact: response.data.sec_emergency_contact,
  //       sec_ec_cell: response.data.sec_ec_cell,
  //       sec_ec_relationship: response.data.sec_ec_relationship,
  //       sec_ec_work: response.data.sec_ec_work,
  //       provider_email: response.data.provider_email,
  //     });

  //     setLoading(false);
  //   } catch (error) {
  //     toast.error("Error fetching patient profile:", error);
  //     setLoading(false);
  //   }
  // };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const savePatient = async () => {
    try {
      await axios.put("/patients/pprofile/edit", patientInfo);
      window.location.reload();
      toast.success("Patient info saved successfully");
      changeToFalse();
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 600
      ) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <div className="pb-4">
        <div
          className=" text-ffff"
          style={{ display: "inline-flex", cursor: "pointer" }}
          onClick={() => changeToFalse()}
        >
          Cancel
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-sky-400 rounded-xl p-4">
            <h2 className="text-xl text-gray-700 mb-4">Basic Information</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Patient Name:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter name"
                  value={patientInfo.name}
                  onChange={handleInputChange}
                  name="name"
                  maxLength={50}
                />
              </p>
              <p>
                <span className="font-semibold">Age:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter age"
                  value={patientInfo.age}
                  onChange={handleInputChange}
                  name="age"
                  maxLength={2}
                />
              </p>
              <p>
                <span className="font-semibold">Best Peak Flow:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter peak flow"
                  value={patientInfo.gz_peak_flow_max}
                  onChange={handleInputChange}
                  name="gz_peak_flow_max"
                  maxLength={4}
                />
              </p>
            </div>
          </div>

          <div className="border border-sky-400 rounded-xl p-4">
            <h2 className="text-xl text-gray-700 mb-4">
              Primary Emergency Contact
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Primary Contact:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter name"
                  value={patientInfo.prim_emergency_contact}
                  onChange={handleInputChange}
                  name="prim_emergency_contact"
                  maxLength={50}
                />
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter email"
                  value={patientInfo.email}
                  onChange={handleInputChange}
                  name="email"
                  maxLength={30}
                />
              </p>
              <p>
                <span className="font-semibold">Cell Phone:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={patientInfo.prim_ec_cell}
                  onChange={handleInputChange}
                  name="prim_ec_cell"
                  maxLength={11}
                />
              </p>
              <p>
                <span className="font-semibold">Work Phone:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={patientInfo.prim_ec_work}
                  onChange={handleInputChange}
                  name="prim_ec_work"
                  maxLength={11}
                />
              </p>
              <p>
                <span className="font-semibold">Relation:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter relation"
                  value={patientInfo.prim_ec_relationship}
                  onChange={handleInputChange}
                  name="prim_ec_relationship"
                  maxLength={50}
                />
              </p>
            </div>
          </div>

          <div className="border border-sky-400 rounded-xl p-4">
            <h2 className="text-xl text-gray-700 mb-4">
              Secondary Emergency Contact
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter name"
                  value={patientInfo.sec_emergency_contact}
                  onChange={handleInputChange}
                  name="sec_emergency_contact"
                  maxLength={50}
                />
              </p>
              <p>
                <span className="font-semibold">Cell Phone:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={patientInfo.sec_ec_cell}
                  onChange={handleInputChange}
                  name="sec_ec_cell"
                  maxLength={11}
                />
              </p>
              <p>
                <span className="font-semibold">Work Phone:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={patientInfo.sec_ec_work}
                  onChange={handleInputChange}
                  name="sec_ec_work"
                  maxLength={11}
                />
              </p>
              <p>
                <span className="font-semibold">Relation:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter relation"
                  value={patientInfo.sec_ec_relationship}
                  onChange={handleInputChange}
                  name="sec_ec_relationship"
                  maxLength={50}
                />
              </p>
            </div>
          </div>

          <div className="border border-sky-400 rounded-xl p-4">
            <h2 className="text-xl text-gray-700 mb-4">Provider Info</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Provider Email:</span>{" "}
                <input
                  type="text"
                  placeholder="Enter email"
                  value={patientInfo.provider_email}
                  onChange={handleInputChange}
                  name="provider_email"
                  maxLength={50}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className=" text-ffff"
          style={{ display: "inline-flex", cursor: "pointer" }}
          onClick={savePatient}
        >
          Save
        </div>
      </div>
    </div>
  );
}

//export default EditPatient;
