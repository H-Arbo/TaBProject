/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ChangeMeds.css";
import { toast } from "react-hot-toast";
import Button from "./Button";

export const DeleteMeds = ({ closeModal, _id, zone, med, removeRow }) => {
  console.log(med.at(0)._id);
  const deleteMedication = async (e) => {
    e.preventDefault();
    console.log("entered deleteMedication");

    try {
      console.log(med.at(0)._id, _id,zone )
      const {data } = await axios.delete("/patients/deleteMed", {data: {
        _id: _id,
        zone: "green",
        med_id: med.at(0)._id,
  
      }});

      if (data.error) {
        toast.error(data.error);
      } else {
        
        toast.success("Medication Deleted");
        removeRow(med.at(0)._id);
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
      <div className="changeMeds text-center">
        <h1 className="text-xl  mr-4 text-gray-500">Delete Medication</h1>
        <b>Are you sure?</b>
        <div className="flex justify-between items-center p-6">
          <Button onClick= {closeModal} className="text-right" color="blue">
            No, Cancel
          </Button>
          <Button onClick={deleteMedication} className="text-right" color="red">
            Yes, Delete
          </Button>
        </div>
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
