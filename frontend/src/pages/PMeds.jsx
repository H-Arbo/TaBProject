import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Dr_Navbar from "../components/Dr_Navbar";
import { AddMeds } from "../components/AddMeds";
import { DeleteMeds } from "../components/DeleteMeds";
import { MdAdd, MdOutlineCreate, MdDelete } from "react-icons/md";
import Button from "../components/Button";
import EasyEdit, { Types } from "react-easy-edit";
import "../components/ChangeMeds.css";
import { EditMeds } from "../components/EditMeds";

const PMeds = () => {
  const save = (value, field) => {
    alert(value);
  };

  const cancel = () => {
    alert("Cancelled");
  };
  const [modalOpen, setModalOpen] = useState({
    changeMeds: false,
    deleteMeds: false,
    editMeds: false,
  });

  const location = useLocation();
  const { pInfo } = location.state;
  const [rows, setRows] = useState(pInfo.at(0).gz_meds);
  const [medToDelete, setMedToDelete] = useState(null);
  console.log(rows);
  console.log(pInfo);
  const getDeleteRow = (targetIndex) => {
    setMedToDelete(rows.filter((_, idx) => idx === targetIndex));
  };
  const removeRow = (targetIndex) => {
    console.log(targetIndex);
    setRows(rows.filter((_, idx) => idx != targetIndex));
  };
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
                {rows.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-3 border-r border-t border-green-600">
                        {row.med}
                      </td>
                      <td className="p-3 border-r border-t border-green-600">
                        {row.amount}
                      </td>
                      <td className="p-3 border-r border-t border-green-600">
                        {row.when_freq}
                      </td>
                      <td className="p-3 border-r border-t border-green-600">
                        <div className="flex justify-center items-center gap-x-4">
                          <button
                            onClick={() =>
                              setModalOpen({ ...modalOpen, editMeds: true })
                            }
                          >
                            <MdOutlineCreate color="blue" onClick={() => getDeleteRow(index)}/>
                          </button>
                          {modalOpen.editMeds == true && (
                            <EditMeds
                              closeModal={() => {
                                setModalOpen({
                                  ...modalOpen,
                                  editMeds: false,
                                });
                              }}
                              _id={pInfo.at(0)._id}
                              zone="green"
                              editRow={(newTable) => {
                                setRows(newTable);
                              }}
                              oldRow={medToDelete}
                            />
                          )}
                          <button //onClick={() => getDeleteRow(index)}
                            onClick={() =>
                              setModalOpen({ ...modalOpen, deleteMeds: true })
                            }
                          >
                            <MdDelete
                              color="red"
                              onClick={() => getDeleteRow(index)}
                            />
                          </button>
                          {modalOpen.deleteMeds == true && (
                            <DeleteMeds
                              closeModal={() => {
                                setModalOpen({
                                  ...modalOpen,
                                  deleteMeds: false,
                                });
                              }}
                              _id={pInfo.at(0)._id}
                              zone="green"
                              med={medToDelete}
                              removeRow={(newRows) => {
                                setRows(newRows);
                              }}
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-3 text-left darkblue">
          <Button
            color="darkblue"
            onClick={() => setModalOpen({ ...modalOpen, changeMeds: true })}
          >
            <MdAdd />
          </Button>
          {modalOpen.changeMeds == true && (
            <AddMeds
              closeModal={() => {
                setModalOpen({ ...modalOpen, changeMeds: false });
              }}
              _id={pInfo.at(0)._id}
              zone="green"
              addRow={(newTable) => {
                setRows(newTable);
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
