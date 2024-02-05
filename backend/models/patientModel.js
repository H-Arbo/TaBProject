import mongoose from "mongoose";
const medSchema = mongoose.Schema(
    {
        amount: {
            type: String,
            
        },
        med: {
            type: String,
            
        },
        when_freq: {
            type: String,
            
        }
    }
);
const patientSchema = mongoose.Schema(
    {
        age: {
            type: Number,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        ec_cell: {
            type: String,
            required: true,
        },
        ec_relationship: {
            type: String,
            required: true,
        },
        ec_work: {
            type: String,
            required: true,
        },
        emergency_contact: {
            type: String,
            required: true,
        },
        gz_meds: {
            type: [medSchema],
            required: true,
        },
        gz_peak_flow_max: {
            type: Number,
            required: true,
        },
        gz_peak_flow_min: {
            type: Number,
            reuired: true,
        },
        name: {
            type: String,
            required: true,
        },
        pr_peak_flow: {
            type: Number,
            required: true,
        },
        provider:  {
            type: String,
            required: true,
        },
        provider_phone:  {
            type: String,
            required: true,
        },
        rz_meds:  {
            type: [medSchema],
            required: true,
        },
        rz_peak_flow_max: {
            type: Number,
            required: true,
        },
        yz_comment:  {
            type: String,
            required: true,
        },
        yz_meds:  {
            type: [medSchema],
            required: true,
        },
        yz_peak_flow_max:  {
            type: Number,
            required: true,
        },
        yz_peak_flow_min:  {
            type: Number,
            required: true,
        }
    }
);

export const Patient = mongoose.model('sample_patients', patientSchema);