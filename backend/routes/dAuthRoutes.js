import express from 'express';
import {registerDoc} from '../controllers/dAuthControllers.js';
import cors from 'cors';

const router = express.Router();

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

router.post('/doctor/register', registerDoc);




export default router;