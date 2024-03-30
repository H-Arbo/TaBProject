/* eslint-disable react/prop-types */
import React from "react";
import "./ChangeMeds.css";
import EasyEdit, { Types } from "react-easy-edit";
import Button from "./Button";
import { MdAdd } from "react-icons/md";

function renderTitle(zone) {
  if (zone == "green") {
    return <h1 className="h1">Edit Green Zone</h1>;
  } else if (zone == "yellow") {
    return <h1 className="h1">Edit Yellow Zone</h1>;
  } else {
    return <h1 className="h1">Edit Red Zone</h1>;
  }
}

const save = (value, field) => {
  alert(value);
};

const cancel = () => {
  alert("Cancelled");
};
export const ChangeMeds = ({ closeModal, pInfo, zone }) => {
  return (
    <div
      className="changeMeds-container"
      onClick={(e) => {
        if (e.target.className === "changeMeds-container") closeModal();
      }}
    >
      <div className="changeMeds">
        <div className="text-right">
          <button color="darkblue">submit</button>
        </div>

        {renderTitle(zone)}
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
                      placeholder="Peak Flow Max"
                      saveButtonLabel="Save"
                      cancelButtonLabel="Cancel"
                      attributes={{ name: "awesome-input", id: 1 }}
                      instructions="Star this repo!"
                    />
                  </td>
                  <td className="p-3 border-t border-b border-green-600 text-center">
                    {" "}
                    <EasyEdit
                      type={Types.TEXT}
                      onSave={save}
                      onCancel={cancel}
                      placeholder="Peak Flow Min"
                      saveButtonLabel="Save Me"
                      cancelButtonLabel="Cancel Me"
                      attributes={{ name: "awesome-input", id: 1 }}
                      instructions="Star this repo!"
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
                <th className="p-3">Frequency</th>
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
                    <td className="p-3 border-t border-green-600">
                      {medication.when_freq}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-3 text-center darkblue">
          <Button color="darkblue">
            <MdAdd />
          </Button>
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
