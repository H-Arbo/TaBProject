import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { Patient} from './models/patientModel.js';
import cors from 'cors';

const app = express();
//middleware for parsing request body
app.use(express.json());

//cors
app.use(cors());

app.get('/', (request,response) =>{
    console.log(request);
    return response.status(234).send('Welcome to TaB to Stop');
});

// Route to save a new patient

app.post('/patients', async (request, response) => {
    try {
        if(
            !request.body.age ||
            !request.body.date ||
            !request.body.ec_cell ||
            !request.body.ec_relationship ||
            !request.body.ec_work ||
            !request.body.emergency_contact ||
            !request.body.gz_meds ||
            !request.body.gz_peak_flow_max ||
            !request.body.gz_peak_flow_min ||
            !request.body.name ||
            !request.body.pr_peak_flow ||
            !request.body.provider ||
            !request.body.provider_phone ||
            !request.body.rz_meds ||
            !request.body.rz_peak_flow_max ||
            !request.body.yz_comment ||
            !request.body.yz_meds ||
            !request.body.yz_peak_flow_max ||
            !request.body.yz_peak_flow_min

        ){
            return response.status(400).send({
                message: 'Enter all required fields'
            });
        }

        const newPatient = {
            age: request.body.age,
            date: request.body.date,
            ec_cell: request.body.ec_cell, 
            ec_relationship: request.body.ec_relationship,
            ec_work: request.body.ec_work,
            emergency_contact: request.body.emergency_contact, 
            gz_meds: request.body.gz_meds,
            gz_peak_flow_max: request.body.gz_peak_flow_max, 
            gz_peak_flow_min: request.body.gz_peak_flow_min,
            name: request.body.name,
            pr_peak_flow: request.body.pr_peak_flow,
            provider: request.body.provider,
            provider_phone: request.body.provider_phone,
            rz_meds: request.body.rz_meds, 
            rz_peak_flow_max: request.body.rz_peak_flow_max,
            yz_comment: request.body.yz_comment,
            yz_meds: request.body.yz_meds,
            yz_peak_flow_max: request.body.yz_peak_flow_max,
            yz_peak_flow_min: request.body.yz_peak_flow_min,
        };

        const patient = await Patient.create(newPatient);

        return response.status(201).send(patient);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route to get all patients from database
app.get('/patients', async (request, response) => {
    try {
        const patients = await Patient.find({});
        return response.status(200).json(patients);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log("App is listening to port: " + PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });