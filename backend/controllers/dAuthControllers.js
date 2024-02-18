import express from "express";
import { Doctor } from "../models/doctorModel.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";



export const test = async (request, response) => {
  response.status(234).send("dAuthRoutes connected");
};

export const getDoc = async (request, response) => {
  const {token} = request.cookie

  if(token){
    jwt.verify(token, process.env.JWT_STRING, {}, (error, user) => {
      if(error) throw error;
      response.json(user);
    })
  }else{
    response.json(null);
  }
}



export const registerDoc = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    // check name
    if (!name) {
      return response.json({
        error: "name required",
      });
    }
    //check password: no password or password length is < 8 characters
    if (!password || password.length < 8) {
      return response.json({
        error: "password required (min 8 characters)",
      });
    }
    //check if email is new
    const existEmail = await Doctor.findOne({ email });

    if (existEmail) {
      return response.json({
        error: "account already exists for this email",
      });
    }
    const hashedPass = await hashPassword(password);

    const newDoctor = await Doctor.create({
      email,
      name,
      password: hashedPass,
    });
    return response.json(newDoctor);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

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

    //check password
    const passCheck = await comparePassword(password, doc.password);
    if (passCheck) {
      //return response.json("password compare successful");
      jwt.sign({ email: doc.email, id: doc._id, name: doc.name }, process.env.JWT_STRING, {}, (error, token) => {
        if (error) {
            throw error;
        }
          response.cookie("token", token).json(doc);


      })
        
    
      
    }
    if (!passCheck) {
      return response.json({
        error: "Incorrect email or password",
      });
    }
    // return response.json("something's wrong " + doc.password);
  } catch (error) {
    console.log(error);
  }
};
