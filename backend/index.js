import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { PatientModel } from './models/patientModel.js';

const app = express();

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
            !request.body.rz_peak_flow_min ||
            !request.body.yz_comment ||
            !request.body.yz_meds ||
            !request.body.yz_peak_flow_max ||
            !request.body.yz_peak_flow_min

        ){
            return response.status(400).send({
                message: 'Enter all required fields'
            });
        }
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