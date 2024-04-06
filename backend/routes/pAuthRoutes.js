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
  editMaxFlow
} from "../controllers/pAuthControllers.js";
import cors from "cors";

const router = express.Router();

// router.use(cors({
//     credentials: true,
//     origin: 'http://localhost:5173'
// }))

router.get("/", getPatients);
router.post("/register", registerPatient);
router.post("/login", loginPatient);
router.patch("/addMed", addMedication);
router.patch("/editMed", editMedication);
router.patch("/editMinFlow", editMinFlow);
router.patch("/editMaxFlow", editMaxFlow);

router.delete("/deleteMed", deleteMedication);
router.put("/pprofile/edit", editPatient);

export default router;
