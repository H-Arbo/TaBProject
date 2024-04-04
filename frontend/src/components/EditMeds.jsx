/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ChangeMeds.css";
import { toast } from "react-hot-toast";
import EasyEdit, { Types } from "react-easy-edit";

export const EditMeds = ({ closeModal, _id, zone, editRow, oldRow }) => {
  const save = (value, field) => {
    alert(value);
  };

  const cancel = () => {
    alert("Cancelled");
  };
  const [data, setData] = useState({
    medication: "",
    amount: "",
    when_freq: "",
  });

  const editMedication = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="changeMeds-container"
      onClick={(e) => {
        if (e.target.className === "changeMeds-container") closeModal();
      }}
    >
      <div className="changeMeds">
        <label className="text-xl mr-4 text-gray-500">Medication</label>
        <div className="border-2 border-gray-500 px-4 py-2 w-full">
          <EasyEdit
            type={Types.TEXT}
            onSave={save}
            onCancel={cancel}
            placeholder={oldRow.med}
            saveButtonLabel="Save"
            cancelButtonLabel="Cancel"
            attributes={{ name: "awesome-input", id: 1 }}
          />
        </div>
        <form onSubmit={editMedication}>
          <label className="text-xl mr-4 text-gray-500">Medication</label>
          <input
            type="text"
            placeholder={oldRow.med}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={data.med}
            onChange={(e) => setData({ ...data, med: e.target.value })}
          ></input>

          <label className="text-xl mr-4 text-gray-500">Amount</label>
          <input
            type="text"
            placeholder={oldRow.amount}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={data.amount}
            onChange={(e) => setData({ ...data, amount: e.target.value })}
          ></input>

          <label className="text-xl mr-4 text-gray-500">Frequency</label>
          <input
            type="text"
            placeholder={oldRow.when_freq}
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
