/* eslint-disable react/prop-types */
import React from "react";
import "./ChangeMeds.css";

export const ChangeMeds = ({ closeModal }) => {
  return (
    <div
      className="changeMeds-container"
      onClick={(e) => {
        if (e.target.className === "changeMeds-container") closeModal();
      }}
    >
      <div className="changeMeds">
        <form>
          <label className="text-xl mr-4 text-gray-500">Medication</label>
          <input type="text" placeholder="New Medication"></input>

          <label className="text-xl mr-4 text-gray-500">Amount</label>
          <input type="text" placeholder="New Amount"></input>

          <label className="text-xl mr-4 text-gray-500">Frequency</label>
          <input type="text" placeholder="New Frequency"></input>
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
