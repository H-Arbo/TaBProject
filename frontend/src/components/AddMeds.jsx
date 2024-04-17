/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ChangeMeds.css";
import { toast } from "react-hot-toast";

export const AddMeds = ({ closeModal , _id, inputZone, addRow}) => {
  const [data, setData] = useState({
    medication: "",
    amount: "",
    when_freq: "",
  });
  console.log(_id);
  console.log(inputZone);
  const addMedication = async (e) => {
    e.preventDefault();
    console.log("entered addMedication");

    const {
      med,
      amount,
      when_freq,
    } = data;

    try {
      
      const {data } = await axios.patch("/patients/addMed", {
        _id: _id,
        zone: inputZone,
        med,
        amount,
        when_freq,
  
      });
      console.log(data);
      if (data.error) {
        setData({});
        toast.error(data.error);
      } else {
        setData({});
        addRow(data);
        toast.success("Medication Added!");
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div
      className="changeMeds-container"
      onClick={(e) => {
        if (e.target.className === "changeMeds-container") closeModal();
      }}
    >
      <div className="changeMeds">
        <form onSubmit={addMedication}>
          <label className="text-xl mr-4 text-gray-500">Medication</label>
          <input
            type="text"
            placeholder="New Medication"
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={data.med}
            onChange={(e) => setData({ ...data, med: e.target.value })}
          ></input>

          <label className="text-xl mr-4 text-gray-500">Amount</label>
          <input
            type="text"
            placeholder="New Amount"
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={data.amount}
            onChange={(e) => setData({ ...data, amount: e.target.value })}
          ></input>

          <label className="text-xl mr-4 text-gray-500">Frequency</label>
          <input
            type="text"
            placeholder="New Frequency"
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={data.when_freq}
            onChange={(e) => setData({ ...data, when_freq: e.target.value })}
          ></input>
          <button type="submit" className="p-2 bg-sky-300 m-8">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// <form>
//           <div>
//             <label>Peak Flow Max</label>
//             <input type="text" placeholder="Peak Flow max"></input>
//             <label>Peak Flow Min</label>
//             <input type="text" placeholder="Peak Flow min"></input>
//           </div>
//         </form>