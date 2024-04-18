import express from "express";
import { Doctor } from "../models/doctorModel.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
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
    response.status(500).send({ message: error.message });
  }
};

export const getDoc = async (request, response) => {
  try {
    const {email} = request.params;
    console.log(email);
    const doc = await Doctor.findOne({email});
    console.log(doc);
    // have reponse be a json object with each document
    //return response.status(200).json(patients);

    //incoporate different object
    return response.status(200).json({
      data: doc
    });

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
}


export const registerDoc = async (request, response) => {
  const containsNumberRegex = /\d/;
  const containsCapitalRegex = /[A-Z]/;
  const containsEmojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  try {
    const { name, email, password, phone } = request.body;
    // check name
    if (!name) {
      return response.json({
        error: "name required",
      });
    }
    if (containsNumberRegex.test(name) || containsEmojiRegex.test(name)) {
      return response.json({
        error: 'Name may only include letters.'
      })
    }

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
    else if (!containsCapitalRegex.test(password)) {
      return response.json({
        error: 'Password must contain at least one uppercase letter.'
      })
    }
    else if (containsEmojiRegex.test(password)) {
      return response.json({
        error: 'Password may not contain emojis.'
      })
    };
    //check if email is new
    const existEmail = await Doctor.findOne({ email });

    if (existEmail) {
      return response.json({
        error: "account already exists for this email",
      });
    }
    const hashedPass = await hashPassword(password);

    const isValidPhone = /^\d{10}$/;

    if (!isValidPhone.test(phone)) {
      return response.json({
        error: 'Invalid phone number'
      });
    }


    const newDoctor = await Doctor.create({
      email,
      name,
      password: hashedPass,
      phone,
    });
    return response.json(newDoctor);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

let loginAttempts = {};


export const loginDoc = async (request, response) => {
  try {
    const { email, password } = request.body;

    //check for user existence
    const doc = await Doctor.findOne({ email });
    if (!doc) {
      return response.json({
        error: "Incorrect email or password",
      });
    }

    // Check if the user is locked out
    if (loginAttempts[email] && loginAttempts[email].attempts >= 5) {
      const lockoutTime = loginAttempts[email].lockoutTime;
      if (Date.now() < lockoutTime) {
        // Return error message indicating lockout period
        return response.json({
          error: "Too many login attempts. Please try again later.",
          lockoutTime: lockoutTime,
        });
      } else {
        // Reset login attempts if the lockout period has passed
        loginAttempts[email].attempts = 0;
        delete loginAttempts[email].lockoutTime;
      }
    }

    //check password
    const passCheck = await comparePassword(password, doc.password);
    if (passCheck) {

      delete loginAttempts[email];

      //return response.json("password compare successful");
      jwt.sign({ email: doc.email, id: doc._id, name: doc.name, phone: doc.phone }, process.env.JWT_STRING, {}, (error, token) => {
        if (error) {
          throw error;
        }
        return response.cookie("token", token).json(doc);
      })

    }
    if (!passCheck) {

      if (!loginAttempts[email]) {
        loginAttempts[email] = { attempts: 1 };
      }
      else {
        loginAttempts[email].attempts++;
      }


      //check if maximum attempts reached
      if (loginAttempts[email].attempts >= 5) {
        loginAttempts[email].lockoutTime = Date.now() + 120000; //lockout for 2 mins
      }

      return response.json({
        error: "Incorrect email or password",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editDoc = async (request, response) => {
  const containsNumberRegex = /\d/;
  const containsCapitalRegex = /[A-Z]/;
  const containsEmojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  try {
    const {
      name,
      email,
      phone,
    } = request.body;

    // Check fields 
    if (!name || !email || !phone) {
      return response.status(400).json({
        error: 'Please provide all required fields.'
      });
    }

    // Check name
    if (containsNumberRegex.test(name) || containsEmojiRegex.test(name)) {
      return response.status(400).json({
        error: 'Name may only include letters.'
      })
    }

    // Find doctor by email
    const existingDoctor = await Doctor.findOne({ email });
    if (!existingDoctor) {
      return response.status(404).json({
        error: 'Doctor not found.'
      });
    }

    const isValidPhone = /^\d{10}$/;

    if (!isValidPhone.test(phone)) {
      return response.status(400).json({
        error: 'Invalid phone number'
      });
    }

    // Update patient fields
    existingDoctor.name = name;
    existingDoctor.phone = phone;

    // Save updated patient
    const updatedDoctor = await existingDoctor.save();

    const token = jwt.sign(
      {
        email: updatedDoctor.email,
        id: updatedDoctor._id,
        name: updatedDoctor.name,
        phone: updatedDoctor.phone
      },
      process.env.JWT_STRING,
      {}
    );

    return response.cookie("token", token).json(updatedDoctor);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

