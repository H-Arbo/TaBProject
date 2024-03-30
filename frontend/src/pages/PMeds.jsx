import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Dr_Navbar from "../components/Dr_Navbar";
import { ChangeMeds } from "../components/ChangeMeds";
import { MdAdd } from "react-icons/md";
import Button from "../components/Button";
import EasyEdit, { Types } from "react-easy-edit";
import "../components/ChangeMeds.css";

const PMeds = () => {
  const save = (value, field) => {
    alert(value);
  };

  const cancel = () => {
    alert("Cancelled");
  };
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const { pInfo } = location.state;
  return (
    <>
      <Dr_Navbar />
      <div className="p-4">
        <h1 className="text-3xl my-4">Change Patient Medications</h1>
        <h1 className="text-3xl my-4">Green Zone</h1>

        <div className="flex flex-wrap justify-between items-start">
          <div className="border border-green-600 rounded-md">
            <table className="w-full">
              <tbody>
                {pInfo.map((patient, index) => (
                  <tr key={patient._id}>
                    <td className="p-3 border-t border-r border-b border-green-600 text-center">
                      {" "}
                      <EasyEdit
                        type={Types.TEXT}
                        onSave={save}
                        onCancel={cancel}
                        placeholder="Change Peak Flow Max"
                        saveButtonLabel="Save"
                        cancelButtonLabel="Cancel"
                        attributes={{ name: "awesome-input", id: 1 }}

                      />
                    </td>
                    <td className="p-3 border-t border-b border-green-600 text-center">
                      {" "}
                      <EasyEdit
                        type={Types.TEXT}
                        onSave={save}
                        onCancel={cancel}
                        placeholder="Change Peak Flow Min"
                        saveButtonLabel="Save Me"
                        cancelButtonLabel="Cancel Me"
                        attributes={{ name: "awesome-input", id: 1 }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="w-full">
              <thead>
                <tr className="bg-green-200">
                  <th className="p-3 border-r border-green-600">Medication</th>
                  <th className="p-3 border-r border-green-600">Amount</th>
                  <th className="p-3 border-r border-green-600">Frequency</th>
                  <th className="p-3">Operations</th>
                </tr>
              </thead>
              <tbody>
                {pInfo.map((patient) =>
                  patient.gz_meds.map((medication, index) => (
                    <tr key={index}>
                      <td className="p-3 border-r border-t border-green-600">
                        {medication.med}
                      </td>
                      <td className="p-3 border-r border-t border-green-600">
                        {medication.amount}
                      </td>
                      <td className="p-3 border-r border-t border-green-600">
                        {medication.when_freq}
                      </td>
                      <td className="p-3 border-r border-t border-green-600">
                        {medication.amount}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
        </div>
        <div className="p-3 text-left darkblue">
          <Button color="darkblue" onClick={() => setModalOpen(true)}>
            <MdAdd />
          </Button>
          {modalOpen && (
            <ChangeMeds
              closeModal={() => {
                setModalOpen(false);
              }}
            />
          )}
        </div>
        {/* <EasyEdit
          type={Types.TEXT}
          onSave={save}
          onCancel={cancel}
          placeholder="Peak Flow Max"
          saveButtonLabel="Save Me"
          cancelButtonLabel="Cancel Me"
          attributes={{ name: "awesome-input", id: 1 }}
          instructions="Star this repo!"
        />
        <EasyEdit
          type={Types.TEXT}
          onSave={save}
          onCancel={cancel}
          placeholder="Peak Flow Min"
          saveButtonLabel="Save Me"
          cancelButtonLabel="Cancel Me"
          attributes={{ name: "awesome-input", id: 1 }}
          instructions="Star this repo!"
        /> */}

        <h1 className="text-3xl my-4">Yellow Zone</h1>
        <h1 className="text-3xl my-4">Red Zone</h1>
      </div>
    </>
  );
};

export default PMeds;
