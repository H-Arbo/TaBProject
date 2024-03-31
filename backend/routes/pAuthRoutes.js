import express from "express";
import {
  registerPatient,
  loginPatient,
  getPatients,
  getPatient,
  editPatient,
  editMedication,
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
router.patch("/editMed", editMedication);
router.put("/editProfile/:id", editPatient);

export default router;
