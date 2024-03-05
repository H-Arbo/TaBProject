import express from 'express';
import {registerPatient,loginPatient, getPatients, editPatient} from '../controllers/pAuthControllers.js';
import cors from 'cors';
import EditPatients from '../../frontend/src/pages/EditPatient.jsx';

const router = express.Router();

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

router.get("/", getPatients);
router.post("/register", registerPatient);
router.post("/login", loginPatient);
// router.get('/patients/:id', getPatient);

router.put("/editProfile", editPatient);


export default router;