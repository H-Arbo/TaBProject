import express from 'express';
import {registerDoc,loginDoc, getPatients} from '../controllers/dAuthControllers.js';
import cors from 'cors';

const router = express.Router();

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

router.get("/", getPatients);
router.post("/register", registerDoc);
router.post("/login", loginDoc);
//router.get("/profile", getDoc);




export default router;