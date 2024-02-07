import mongoose from "mongoose";
import patientSchema from '../models/patientModel'

const doctorSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true
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
            required: true,
        },
        patient_list:  {
            type: [patientSchema],
            required: true,
        }
    }
);

export const Doctor = mongoose.model('doctors', doctorSchema);