import express from 'express';
import {registerPatient,loginPatient, test} from '../controllers/pAuthControllers';
import cors from 'cors';

const router = express.Router();

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

router.get("/", test);
router.post("/register", registerPatient);
router.post("/login", loginPatient);

export default router;