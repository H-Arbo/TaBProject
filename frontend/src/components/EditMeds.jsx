/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ChangeMeds.css";
import { toast } from "react-hot-toast";
import EasyEdit, { Types } from "react-easy-edit";

export const EditMeds = ({ closeModal, _id, inputZone, rerenderRow, oldMed }) => {
  const saveMed = async (value, field) => {

    try {
      console.log(oldMed.at(0)._id, _id,inputZone )
      const {data } = await axios.patch("/patients/editMed", {
        _id: _id,
        zone: inputZone,
        med_id: oldMed.at(0)._id,
        new_info: {
          med: value,
          amount: oldMed.amount,
          when_freq: oldMed.when_freq,
        },
  
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        rerenderRow(data)
        toast.success("Medication Changed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const saveAmount = async (value, field) => {
    try {
      console.log(oldMed.at(0)._id, _id,inputZone )
      const {data } = await axios.patch("/patients/editMed", {
        _id: _id,
        zone: inputZone,
        med_id: oldMed.at(0)._id,
        new_info: {
          med: oldMed.med,
          amount: value,
          when_freq: oldMed.when_freq,
        },
  
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        rerenderRow(data)
        toast.success("Medication Changed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const saveFreq = async (value, field) => {
    try {
      console.log(oldMed.at(0)._id, _id,inputZone )
      const {data } = await axios.patch("/patients/editMed", {
        _id: _id,
        zone: inputZone,
        med_id: oldMed.at(0)._id,
        new_info: {
          med: oldMed.med,
          amount: oldMed.amount,
          when_freq: value,
        },
  
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        rerenderRow(data)
        toast.success("Medication Changed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    toast.error("cancelled")
  };
  const [data, setData] = useState({
    medication: "",
    amount: "",
    when_freq: "",
  });

  // const endProcess = () => {
  //   rerenderRow()
  //   closeModal()
  //   //reset rows to reflect change
  //   //close modal
  // };

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
            onSave={saveMed}
            placeholder="Change Medication"
            saveButtonLabel="Save"
            cancelButtonLabel="Cancel"
            attributes={{ name: "awesome-input", id: 1 }}
          />
        </div>
        <label className="text-xl mr-4 text-gray-500">Amount</label>
        <div className="border-2 border-gray-500 px-4 py-2 w-full">
          <EasyEdit
            type={Types.TEXT}
            onSave={saveAmount}
            onCancel={cancel}
            placeholder="Change Amount"
            saveButtonLabel="Save"
            cancelButtonLabel="Cancel"
            attributes={{ name: "awesome-input", id: 1 }}
          />
        </div><label className="text-xl mr-4 text-gray-500">Frequency</label>
        <div className="border-2 border-gray-500 px-4 py-2 w-full">
          <EasyEdit
            type={Types.TEXT}
            onSave={saveFreq}
            onCancel={cancel}
            placeholder="Change Frequency"
            saveButtonLabel="Save"
            cancelButtonLabel="Cancel"
            attributes={{ name: "awesome-input", id: 1 }}
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={closeModal}>Finish</button>
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
