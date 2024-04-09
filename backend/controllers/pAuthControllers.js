import express from "express";
import { Patient } from "../models/patientModel.js";
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

export const editMinFlow = async (request, response) => {
  try {
    const { _id, zone, new_min } = request.body;
    if(zone == "green"){

      const patient = await Patient.updateOne(
        { _id: _id },
        {
          $set: {
            "gz_peak_flow_min": new_min,
          },
        });
      if(patient.matchedCount == 0){
        return response.status(404).json({ message: "No match found" });
      }
      return response.status(200).json("min flow updated");
    }
    if(zone == "yellow"){

      const patient = await Patient.updateOne(
        { _id: _id },
        {
          $set: {
            "yz_peak_flow_min": new_min,
          },
        });
      if(patient.matchedCount == 0){
        return response.status(404).json({ message: "No match found" });
      }
      return response.status(200).json("min flow updated");
    }
    if(zone == "red"){

      const patient = await Patient.updateOne(
        { _id: _id },
        {
          $set: {
            "rz_peak_flow_min": new_min,
          },
        });
      if(patient.matchedCount == 0){
        return response.status(404).json({ message: "No match found" });
      }
      return response.status(200).json("min flow updated");
    }
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ message: error.message });
  }

};

export const editMaxFlow = async (request, response) => {
  try {
    const { _id, zone, new_max } = request.body;
    if(zone == "green"){

      const patient = await Patient.updateOne(
        { _id: _id },
        {
          $set: {
            "gz_peak_flow_max": new_max,
          },
        });
      if(patient.matchedCount == 0){
        return response.status(404).json({ message: "No match found" });
      }
      return response.status(200).json("max flow updated");
    }
    if(zone == "yellow"){

      const patient = await Patient.updateOne(
        { _id: _id },
        {
          $set: {
            "yz_peak_flow_max": new_max,
          },
        });
      if(patient.matchedCount == 0){
        return response.status(404).json({ message: "No match found" });
      }
      return response.status(200).json("max flow updated");
    }
    if(zone == "red"){

      const patient = await Patient.updateOne(
        { _id: _id },
        {
          $set: {
            "rz_peak_flow_max": new_max,
          },
        });
      if(patient.matchedCount == 0){
        return response.status(404).json({ message: "No match found" });
      }
      return response.status(200).json("max flow updated");
    }
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ message: error.message });
  }
};

export const addMedication = async (request, response) => {
  try {
    const { _id, zone, med, amount, when_freq } = request.body;
    console.log(request.body);
    const patient = await Patient.findById(_id);

    if (!patient) {
      return response.status(404).json({ message: "Patient not found" });
    }

    if (zone == "green") {
      patient.gz_meds.push({ med: med, amount: amount, when_freq: when_freq });
      await patient.save();
      return response.status(200).json(patient.gz_meds);
    }
    if (zone == "yellow") {
      patient.yz_meds.push({ med: med, amount: amount, when_freq: when_freq });
      await patient.save();
      return response.status(200).json(patient.yz_meds);
    }
    if (zone == "red") {
      patient.rz_meds.push({ med: med, amount: amount, when_freq: when_freq });
      await patient.save();
      return response.status(200).json(patient.rz_meds);
    }
    console.log(patient);
    // Return the patient data
    
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ message: error.message });
  }
};

export const editMedication = async (request, response) => {
  try {
    const { _id, zone, med_id, new_info } = request.body;
    console.log(request.body);

    if (zone == "green") {
      console.log("green zone");
      console.log(med_id);
      const patient = await Patient.updateOne(
        { _id: _id, "gz_meds._id": med_id },
        {
          $set: {
            "gz_meds.$.med": new_info.med,
            "gz_meds.$.amount": new_info.amount,
            "gz_meds.$.when_freq": new_info.when_freq,
          },
        }
      );
      const updatedPatient = await Patient.findById(_id);
      console.log(updatedPatient);
      if (!updatedPatient) {
        return response.status(404).json({ message: "Patient not found" });
      }

      return response.status(200).json(updatedPatient.gz_meds);
    }
    if (zone == "yellow") {
      console.log("yellow zone");
      console.log(med_id);
      const patient = await Patient.updateOne(
        { _id: _id, "yz_meds._id": med_id },
        {
          $set: {
            "yz_meds.$.med": new_info.med,
            "yz_meds.$.amount": new_info.amount,
            "yz_meds.$.when_freq": new_info.when_freq,
          },
        }
      );
      const updatedPatient = await Patient.findById(_id);
      console.log(updatedPatient);
      if (!updatedPatient) {
        return response.status(404).json({ message: "Patient not found" });
      }

      return response.status(200).json(updatedPatient.yz_meds);
    }
    if (zone == "red") {
      console.log("red zone");
      console.log(med_id);
      const patient = await Patient.updateOne(
        { _id: _id, "rz_meds._id": med_id },
        {
          $set: {
            "rz_meds.$.med": new_info.med,
            "rz_meds.$.amount": new_info.amount,
            "rz_meds.$.when_freq": new_info.when_freq,
          },
        }
      );
      const updatedPatient = await Patient.findById(_id);
      console.log(updatedPatient);
      if (!updatedPatient) {
        return response.status(404).json({ message: "Patient not found" });
      }

      return response.status(200).json(updatedPatient.rz_meds);
    }

    // const updatedPatient = await Patient.findById(_id);
    // console.log(updatedPatient);
    // if (!updatedPatient) {
    //   return response.status(404).json({ message: "Patient not found" });
    // }

    // return response.status(200).json(updatedPatient.gz_meds);
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ message: error.message });
  }
};
export const deleteMedication = async (request, response) => {
  try {
    const { _id, zone, med_id } = request.body;
    console.log(request.body);
    const patient = await Patient.findById(_id);
    console.log(patient);
    if (!patient) {
      return response.status(404).json({ message: "Patient not found" });
    }
    // Return the patient data

    if (zone == "green") {
      console.log("green zone");
      console.log(med_id);
      patient.gz_meds.pull({ _id: med_id });
      await patient.save();
      return response.status(200).json(patient.gz_meds);
    }
    if (zone == "yellow") {
      console.log("yellow zone");
      console.log(med_id);
      patient.yz_meds.pull({ _id: med_id });
      await patient.save();
      return response.status(200).json(patient.yz_meds);
    }
    if (zone == "red") {
      console.log("red zone");
      console.log(med_id);
      patient.rz_meds.pull({ _id: med_id });
      await patient.save();
      return response.status(200).json(patient.rz_meds);
    }
    
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ message: error.message });
  }
};

export const getPatient = async (request, response) => {
  try {
    const { id } = request.body; // Extract patient ID from request parameters
    const patient = await Patient.findById(id); // Find patient by ID
    if (!patient) {
      return response.status(404).json({ message: "Patient not found" });
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
  const containsEmojiRegex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  try {
    const {
      name,
      age,
      email,
      password,
      prim_emergency_contact,
      prim_ec_cell,
      prim_ec_relationship,
      prim_ec_work,
      sec_emergency_contact,
      sec_ec_cell,
      sec_ec_relationship,
      sec_ec_work,
      provider_email,
      provider,
      provider_phone,
      rz_meds,
      yz_meds,
      gz_meds,
      yz_comment,
    } = request.body;
    // check name
    if (!name) {
      return response.json({
        error: "name required",
      });
    }
    //check password: no password or password length is < 8 characters
    if (!password) {
      return response.json({
        error:
          "Password required (Must be at least 8 characters, contain no emojis, and include at least one number and one uppercase letter.)",
      });
    } else if (password.length < 8) {
      return response.json({
        error: "Password must be at least 8 characters.",
      });
    } else if (!containsNumberRegex.test(password)) {
      return response.json({
        error: "Password must include at least one number.",
      });
    } else if (!containsCapitalRegex.test(password)) {
      return response.json({
        error: "Password must contain at least one uppercase letter.",
      });
    } else if (containsEmojiRegex.test(password)) {
      return response.json({
        error: "Password may not contain emojis.",
      });
    }
    //check if email is new
    const existEmail = await Patient.findOne({ email });

    if (existEmail) {
      return response.json({
        error: "account already exists for this email",
      });
    }
    const hashedPass = await hashPassword(password);

    if (!age) {
      return response.json({
        error: "Age required",
      });
    }

    if (!prim_emergency_contact) {
      return response.json({
        error: "Primary Caregiver required",
      });
    }

    if (!prim_ec_cell) {
      return response.json({
        error: "Primary Caregiver Cell Number required",
      });
    }

    if (!prim_ec_relationship) {
      return response.json({
        error: "Primary Caregiver Relation required",
      });
    }

    if (!sec_emergency_contact) {
      return response.json({
        error: "Secondary Caregiver required",
      });
    }

    if (!sec_ec_cell) {
      return response.json({
        error: "Secondary Caregiver Cell Number required",
      });
    }

    if (!sec_ec_relationship) {
      return response.json({
        error: "Secondary Caregiver Relation required",
      });
    }

    if (!provider_email) {
      return response.json({
        error: "Provider Email required",
      });
    }

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
      provider,
      provider_phone,
      rz_meds,
      yz_meds,
      gz_meds,
      yz_comment,
    });
    return response.json(newPatient);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

let loginAttempts = {};

export const loginPatient = async (request, response) => {
  try {
    const { email, password } = request.body;

    //check for user existence
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return response.json({
        error: "No patient found",
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
    const passCheck = await comparePassword(password, patient.password);
    if (passCheck) {
      //return response.json("password compare successful");
      jwt.sign(
        {
          email: patient.email,
          id: patient._id,
          name: patient.name,
          age: patient.age,
          prim_emergency_contact: patient.prim_emergency_contact,
          email: patient.email,
          prim_ec_cell: patient.prim_ec_cell,
          prim_ec_work: patient.prim_ec_work,
          prim_ec_relationship: patient.prim_ec_relationship,
          sec_emergency_contact: patient.sec_emergency_contact,
          sec_ec_cell: patient.sec_ec_cell,
          sec_ec_work: patient.sec_ec_work,
          sec_ec_relationship: patient.sec_ec_relationship,
          provider: patient.provider,
          provider_phone: patient.provider_phone,
          provider_email: patient.provider_email,
          pr_peak_flow: patient.pr_peak_flow,
          gz_peak_flow_max: patient.gz_peak_flow_max,
          gz_peak_flow_min: patient.gz_peak_flow_min,
          rz_peak_flow_max: patient.rz_peak_flow_max,
          yz_peak_flow_max: patient.yz_peak_flow_max,
          yz_peak_flow_min: patient.yz_peak_flow_min,
          rz_meds: patient.rz_meds,
          yz_meds: patient.yz_meds,
          gz_meds: patient.gz_meds,
          yz_comment: patient.yz_comment,
        },
        process.env.JWT_STRING,
        {},
        (error, token) => {
          if (error) {
            throw error;
          }
          return response.cookie("token", token).json(patient);
        }
      );
    }
    if (!passCheck) {
      if (!loginAttempts[email]) {
        loginAttempts[email] = { attempts: 1 };
      } else {
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

export const editPatient = async (request, response) => {
  try {
    const {
      name,
      age,
      email,
      pr_peak_flow,
      prim_emergency_contact,
      prim_ec_cell,
      prim_ec_relationship,
      prim_ec_work,
      sec_emergency_contact,
      sec_ec_cell,
      sec_ec_relationship,
      sec_ec_work,
    } = request.body;

    if (
      !name ||
      !age ||
      !email ||
      !pr_peak_flow ||
      !prim_emergency_contact ||
      !prim_ec_cell ||
      !prim_ec_relationship ||
      !prim_ec_work ||
      !sec_emergency_contact ||
      !sec_ec_cell ||
      !sec_ec_relationship ||
      !sec_ec_work
    ) {
      return response.status(400).json({
        error: "Please provide all required fields.",
      });
    }

    // Find patient by email
    const existingPatient = await Patient.findOne({ email });
    if (!existingPatient) {
      return response.status(404).json({
        error: "Patient not found.",
      });
    }

    // Update patient fields
    existingPatient.name = name;
    existingPatient.age = age;
    existingPatient.pr_peak_flow = pr_peak_flow;
    existingPatient.prim_emergency_contact = prim_emergency_contact;
    existingPatient.prim_ec_cell = prim_ec_cell;
    existingPatient.prim_ec_relationship = prim_ec_relationship;
    existingPatient.prim_ec_work = prim_ec_work;
    existingPatient.sec_emergency_contact = sec_emergency_contact;
    existingPatient.sec_ec_cell = sec_ec_cell;
    existingPatient.sec_ec_relationship = sec_ec_relationship;
    existingPatient.sec_ec_work = sec_ec_work;

    // Save updated patient
    const updatedPatient = await existingPatient.save();

    const token = jwt.sign(
      {
        email: updatedPatient.email,
        id: updatedPatient._id,
        name: updatedPatient.name,
        age: updatedPatient.age,
        prim_emergency_contact: updatedPatient.prim_emergency_contact,
        prim_ec_cell: updatedPatient.prim_ec_cell,
        prim_ec_work: updatedPatient.prim_ec_work,
        prim_ec_relationship: updatedPatient.prim_ec_relationship,
        sec_emergency_contact: updatedPatient.sec_emergency_contact,
        sec_ec_cell: updatedPatient.sec_ec_cell,
        sec_ec_work: updatedPatient.sec_ec_work,
        sec_ec_relationship: updatedPatient.sec_ec_relationship,
        provider: updatedPatient.provider,
        provider_phone: updatedPatient.provider_phone,
        provider_email: updatedPatient.provider_email,
        pr_peak_flow: updatedPatient.pr_peak_flow,
        gz_peak_flow_max: updatedPatient.gz_peak_flow_max,
        gz_peak_flow_min: updatedPatient.gz_peak_flow_min,
        rz_peak_flow_max: updatedPatient.rz_peak_flow_max,
        yz_peak_flow_max: updatedPatient.yz_peak_flow_max,
        yz_peak_flow_min: updatedPatient.yz_peak_flow_min,
        rz_meds: updatedPatient.rz_meds,
        yz_meds: updatedPatient.yz_meds,
        gz_meds: updatedPatient.gz_meds,
        yz_comment: updatedPatient.yz_comment,
      },
      process.env.JWT_STRING,
      {}
    );

    return response.cookie("token", token).json(updatedPatient);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({
      error: "Server Error",
    });
  }
};

export const archivePatient = async (request, response) => {
  try {
    const { _id, new_prov } = request.body;

    const patient = await Patient.updateOne(
      { _id: _id },
      {
        $set: {
          "provider_email": new_prov,
        },
      }
    );

    if (patient.matchedCount === 0) {
      return response.status(404).json({ error: "No matching patient found" });
    }

    return response.status(204).send(); // No content to return after successful update
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ error: "Internal server error" });
  }
};
