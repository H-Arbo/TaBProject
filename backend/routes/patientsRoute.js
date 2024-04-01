import express from 'express';
import { Patient} from '../models/patientModel.js';

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
router.put('/:id', async (request,response) => {
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
        const {id} = request.params;

        const result = await Patient.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'patient not found'});
        }
        return response.status(200).send({message: 'Patient updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
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