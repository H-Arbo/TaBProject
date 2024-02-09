import express from 'express';
import {registerDoc} from '../controllers/dAuthControllers.js';
const router = express.Router();


router.post('/docRegister', registerDoc);




export default router;