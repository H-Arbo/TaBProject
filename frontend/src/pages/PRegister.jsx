import BackButton from "../components/BackButton";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function PRegister() {
  const nav = useNavigate();
  const [form, setForm] = useState({
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
    } = form;

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
        setForm({ ...form, password: "" });
        toast.error(data.error);
      } else {
        setForm({});
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

      <div className='flex justify-center items-center pt-2'>
        <div className='flex flex-col justify-center border-2 border-sky-400 rounded-xl p-4 max-w-[600px]'>
          <h1 className="text-3xl my-4">Patient Registration</h1>
          <form className="my-4" onSubmit={patientRegister}>
            <label className="text-xl mr-4 text-gray-500">Patient Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">Patient Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={form.prim_emergency_contact}
              onChange={(e) =>
                setForm({ ...form, prim_emergency_contact: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Cell Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={form.prim_ec_cell}
              onChange={(e) => setForm({ ...form, prim_ec_cell: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Work Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={form.prim_ec_work}
              onChange={(e) => setForm({ ...form, prim_ec_work: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Primary Caregiver (Emergency Contact) Relation to Patient
            </label>
            <input
              type="text"
              placeholder="Enter Relation"
              value={form.prim_ec_relationship}
              onChange={(e) =>
                setForm({ ...form, prim_ec_relationship: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Secondary Caregiver Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              value={form.sec_emergency_contact}
              onChange={(e) =>
                setForm({ ...form, sec_emergency_contact: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Secondary Caregiver Cell Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={form.sec_ec_cell}
              onChange={(e) => setForm({ ...form, sec_ec_cell: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Secondary Caregiver Work Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={form.sec_ec_work}
              onChange={(e) => setForm({ ...form, sec_ec_work: e.target.value })}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">
              Secondary Caregiver Relation to Patient
            </label>
            <input
              type="text"
              placeholder="Enter Relation"
              value={form.sec_ec_relationship}
              onChange={(e) =>
                setForm({ ...form, sec_ec_relationship: e.target.value })
              }
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />

            <label className="text-xl mr-4 text-gray-500">Provider Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={form.provider_email}
              onChange={(e) =>
                setForm({ ...form, provider_email: e.target.value })
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
