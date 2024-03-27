import BackButton from "../components/BackButton";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function PRegister() {
  const nav = useNavigate();
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
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
  
  const patientRegister = async (e) => {
    e.preventDefault();

    const {
      name,
      age,
      email,
      password,
      prim_emergency_contact,
      prim_ec_cell,
      prim_ec_relationship,
      prim_ec_work,
      sec_emergency_contact,
      sec_ec_cell,
      sec_ec_relationship,
      sec_ec_work,
      provider_email,
    } = data;

    try {
      const { data } = await axios.post("/patients/register", {
        //TODO '/register' is not a valid => change to docRegister & patRegister, respectively
        name,
        age,
        email,
        password,
        prim_emergency_contact,
        prim_ec_cell,
        prim_ec_relationship,
        prim_ec_work,
        sec_emergency_contact,
        sec_ec_cell,
        sec_ec_relationship,
        sec_ec_work,
        provider_email,
      });

      if (data.error) {
        setData({ ...data, password: "" });
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registration Successful!");
        nav("/patients/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <BackButton />

      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center border-2 border-sky-400 rounded-xl p-4 max-w-[600px]'>
          <h1 className="text-3xl my-4">Patient Registration</h1>
          <form className="my-4" onSubmit={patientRegister}>
            <label className="text-xl mr-4 text-gray-500">Patient Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">Patient Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={data.prim_emergency_contact}
              onChange={(e) =>
                setData({ ...data, prim_emergency_contact: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Cell Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={data.prim_ec_cell}
              onChange={(e) => setData({ ...data, prim_ec_cell: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Work Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={data.prim_ec_work}
              onChange={(e) => setData({ ...data, prim_ec_work: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Relation to Patient
            </label>
            <input
              type="text"
              placeholder="Enter Relation"
              value={data.prim_ec_relationship}
              onChange={(e) =>
                setData({ ...data, prim_ec_relationship: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Secondary Caregiver Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              value={data.sec_emergency_contact}
              onChange={(e) =>
                setData({ ...data, sec_emergency_contact: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Secondary Caregiver Cell Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={data.sec_ec_cell}
              onChange={(e) => setData({ ...data, sec_ec_cell: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Secondary Caregiver Work Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={data.sec_ec_work}
              onChange={(e) => setData({ ...data, sec_ec_work: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Secondary Caregiver Relation to Patient
            </label>
            <input
              type="text"
              placeholder="Enter Relation"
              value={data.sec_ec_relationship}
              onChange={(e) =>
                setData({ ...data, sec_ec_relationship: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">Provider Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={data.provider_email}
              onChange={(e) =>
                setData({ ...data, provider_email: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <button type="submit" className="p-2 bg-sky-300 m-8">
              Submit
            </button>
          </form>
        </div>

        <img src='/images/Charlotte-Waving.png' alt="/images/Charlotte-Waving.png" style={{
          height: 'auto',
          width: '15%',
          paddingLeft: '25px',
        }} className='front' />
      </div>
    </div>
  );
}
