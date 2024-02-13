import express from 'express'
import {Doctor} from '../models/doctorModel.js'
import { hashPassword, comparePassword } from '../helpers/auth.js';

export const test = async (request, response) => {
    response.status(234).send("dAuthRoutes connected");
}

export const registerDoc = async (request, response) => {
    try {
        const {name, email, password} = request.body;
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
        const existEmail = await Doctor.findOne({email});

        if(existEmail){
            return response.json({
                error: 'account already exists for this email'
            })
        }
        const hashedPass = await hashPassword(password);

        const newDoctor = await Doctor.create({
            email,
            name,
            password: hashedPass,
        })
        return response.json(newDoctor);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

export const loginDoc = async (request, response) =>{
    try {
        const {email, password} = request.body;

        //check for user existence
        const doc = await Doctor.findOne({email});
        if(!doc){
            return response.json({
                error: 'No doctor found'
            })
        }

        //check password
        const passCheck = await comparePassword(password, doc.password);
        if(passCheck){
            return response.json("password compare successful");
        }
    } catch (error) {
        console.log(error)
    }
}

