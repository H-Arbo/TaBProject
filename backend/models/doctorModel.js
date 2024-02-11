import mongoose from "mongoose";
import {patientSchema} from '../models/patientModel.js'

const doctorSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phone:  {
            type: String,
            //required: true,
        },
        patient_list:  {
            type: [patientSchema],
            required: true,
        }
    }
);
export default doctorSchema;
export const Doctor = mongoose.model('doctors', doctorSchema);