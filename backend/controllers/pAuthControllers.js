import express from 'express'
import {Patient} from '../models/patientModel.js.js'
import { hashPassword, comparePassword } from '../helpers/auth.js';

export const test = async (request, response) => {
    response.status(234).send("pAuthRoutes connected");
}

export const registerPatient = async (request, response) => {
    try {
        const {name, email, password, prim_emergency_contact, prim_ec_cell, prim_ec_relationship, prim_ec_work, sec_emergency_contact, sec_ec_cell, sec_ec_relationship, sec_ec_work, provider_email} = request.body;
        // check name
        if(!name){
            return response.json({
                error: 'name required'
            })
        };
        //check password: no password or password length is < 8 characters
        if(!password || password.length <8){
            return response.json({
                error: 'password required (min 8 characters)'
            })
        };
        //check if email is new
        const existEmail = await Patient.findOne({email});

        if(existEmail){
            return response.json({
                error: 'account already exists for this email'
            })
        }
        const hashedPass = await hashPassword(password);

        const newPatient = await Patient.create({
            email,
            name,
            password: hashedPass,
            prim_emergency_contact,
            prim_ec_cell,
            prim_ec_relationship,
            prim_ec_work,
            sec_emergency_contact,
            sec_ec_cell,
            sec_ec_relationship,
            sec_ec_work,
            provider_email,
        })
        return response.json(newPatient);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

export const loginPatient = async (request, response) =>{
    try {
        const {email, password} = request.body;

        //check for user existence
        const patient = await Patient.findOne({email});
        if(!patient){
            return response.json({
                error: 'No patient found'
            })
        }

        //check password
        const passCheck = await comparePassword(password, patient.password);
        if(passCheck){
            return response.json("password compare successful");
        }
    } catch (error) {
        console.log(error)
    }
}

