import express from "express";
import {
  registerPatient,
  loginPatient,
  getPatients,
  getPatient,
  editPatient,
  addMedication,
  editMedication,
  deleteMedication,
  editMinFlow,
  editMaxFlow, 
  archivePatient
} from "../controllers/pAuthControllers.js";
import cors from "cors";

const router = express.Router();

router.get("/", getPatients);
router.post("/register", registerPatient);
router.post("/login", loginPatient);
router.patch("/addMed", addMedication);
router.patch("/editMed", editMedication);
router.patch("/editMinFlow", editMinFlow);
router.patch("/editMaxFlow", editMaxFlow);

router.delete("/deleteMed", deleteMedication);
router.put("/pprofile/edit", editPatient);

router.patch("/archivePatient", archivePatient);

export default router;
