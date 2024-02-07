import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import patientsRoute from "./routes/patientsRoute.js";
import cors from "cors";

const app = express();
//middleware for parsing request body
app.use(express.json());

//cors middleware
app.use(cors());

app.use("/patients", patientsRoute);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to TaB to Stop");
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
