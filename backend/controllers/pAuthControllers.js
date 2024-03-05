import express from 'express'
import { Patient } from '../models/patientModel.js'
import { hashPassword, comparePassword } from '../helpers/auth.js';
import jwt from "jsonwebtoken";

export const getPatients = async (request, response) => {
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
}

export const getPatient = async (request, response) => {
    try {
        const { id } = request.params; // Extract patient ID from request parameters
        const patient = await Patient.findById(id); // Find patient by ID
        if (!patient) {
            return response.status(404).json({ message: 'Patient not found' });
        }
        // Return the patient data
        return response.status(200).json(patient);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: error.message });
    }
};


export const registerPatient = async (request, response) => {
    const containsNumberRegex = /\d/;
    const containsCapitalRegex = /[A-Z]/;
    const containsEmojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    try {
        const { name, age, email, password, prim_emergency_contact, prim_ec_cell, prim_ec_relationship, prim_ec_work, sec_emergency_contact, sec_ec_cell, sec_ec_relationship, sec_ec_work, provider_email } = request.body;
        // check name
        if (!name) {
            return response.json({
                error: 'name required'
            })
        };
        //check password: no password or password length is < 8 characters
        if (!password) {
            return response.json({
                error: 'Password required (Must be at least 8 characters, contain no emojis, and include at least one number and one uppercase letter.)'
            })
        }
        else if (password.length < 8) {
            return response.json({
                error: 'Password must be at least 8 characters.'
            })
        }
        else if (!containsNumberRegex.test(password)) {
            return response.json({
                error: 'Password must include at least one number.'
            })
        }
        else if (!containsCapitalRegex.test(password)){
            return response.json({
                error: 'Password must contain at least one uppercase letter.'
            })
        }
        else if (containsEmojiRegex.test(password)){
            return response.json({
                error: 'Password may not contain emojis.'
            })
        };
        //check if email is new
        const existEmail = await Patient.findOne({ email });

        if (existEmail) {
            return response.json({
                error: 'account already exists for this email'
            })
        }
        const hashedPass = await hashPassword(password);

        if (!age) {
            return response.json({
                error: 'Age required'
            })
        };

        if (!prim_emergency_contact) {
            return response.json({
                error: 'Primary Caregiver required'
            })
        };

        if (!prim_ec_cell) {
            return response.json({
                error: 'Primary Caregiver Cell Number required'
            })
        };

        if (!prim_ec_relationship) {
            return response.json({
                error: 'Primary Caregiver Relation required'
            })
        };

        if (!sec_emergency_contact) {
            return response.json({
                error: 'Secondary Caregiver required'
            })
        };

        if (!sec_ec_cell) {
            return response.json({
                error: 'Secondary Caregiver Cell Number required'
            })
        };

        if (!sec_ec_relationship) {
            return response.json({
                error: 'Secondary Caregiver Relation required'
            })
        };

        if (!provider_email) {
            return response.json({
                error: 'Provider Email required'
            })
        };

        const newPatient = await Patient.create({
            email,
            name,
            age,
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
        response.status(500).send({ message: error.message });
    }
}

export const loginPatient = async (request, response) => {
    try {
        const { email, password } = request.body;

        //check for user existence
        const patient = await Patient.findOne({ email });
        if (!patient) {
            return response.json({
                error: 'No patient found'
            })
        }

        //check password
    const passCheck = await comparePassword(password, patient.password);
    if (passCheck) {
      //return response.json("password compare successful");
      jwt.sign({ email: patient.email, id: patient._id, name: patient.name, age: patient.age, prim_emergency_contact: patient.prim_emergency_contact }, process.env.JWT_STRING, {}, (error, token) => {
        if (error) {
          throw error;
        }
        return response.cookie("token", token).json(patient);
      })
    }
    if (!passCheck) {
      return response.json({
        error: "Incorrect email or password",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

