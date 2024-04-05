import express from 'express';
import { Patient } from '../models/patientModel.js';

 const router = express.Router();

// Route to save a new patient

router.post('/', async (request, response) => {
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
            !request.body.yz_peak_flow_min ||
            !request.body.yz_comment

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
            yz_comment: request.body.yz_comment,
        };

        const patient = await Patient.create(newPatient);

        return response.status(201).send(patient);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route to get all patients from database
router.get('/', async (request, response) => {
    try {
        const patients = await Patient.find({});
        // have reponse be a json object with each document
        //return response.status(200).json(patients);

        //incoporate different object
        return response.status(200).json({
            count: patients.length,
            data: patients,
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route to get one patient by id from database
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const patient = await Patient.findById(id);
        // have reponse be a json object with each document
        //return response.status(200).json(patients);

        //incoporate different object
        return response.status(200).json(patient);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to update patient
router.put('/pprofile/edit', async (request, response) => {
    try {
        const requiredFields = ['name', 'age', 'email', 'pr_peak_flow', 'prim_emergency_contact', 'prim_ec_cell', 'prim_ec_relationship', 'prim_ec_work', 'sec_emergency_contact', 'sec_ec_cell', 'sec_ec_relationship', 'sec_ec_work'];
        for (const field of requiredFields) {
            if (!request.body[field]) {
                return response.status(400).json({ message: `Missing required field: ${field}` });
            }
        }

        const { email } = request.body;

        const updatedPatient = await Patient.findOneAndUpdate({ email }, request.body, { new: true });

        if (!updatedPatient) {
            return response.status(404).json({ message: 'Patient not found' });
        }

        return response.status(200).json({ message: 'Patient updated successfully', updatedPatient });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
});

//Route to update doc
router.put('/dprofile/edit', async (request, response) => {
    try {
        const requiredFields = ['name', 'email', 'phone'];
        for (const field of requiredFields) {
            if (!request.body[field]) {
                return response.status(400).json({ message: `Missing required field: ${field}` });
            }
        }

        const { email } = request.body;

        const updatedDoctor = await Doctor.findOneAndUpdate({ email }, request.body, { new: true });

        if (!updatedDoctor) {
            return response.status(404).json({ message: 'Doctor not found' });
        }

        return response.status(200).json({ message: 'Doctor updated successfully', updatedDoctor });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
});

//Route to remove patient

router.delete('/:id', async (request,response) =>{
    try {
        const {id} = request.params;
        const result = await Patient.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'patient not found'});
        }
        return response.status(200).json({message: 'Patient deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;