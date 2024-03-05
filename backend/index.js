import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import patientsRoute from "./routes/patientsRoute.js";
import dAuthRoutes from "./routes/dAuthRoutes.js";
import pAuthRoutes from "./routes/pAuthRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv/config.js"
import jwt from "jsonwebtoken";

const app = express();
//middleware for parsing request body
app.use(express.json());

//cors middleware
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));

app.use(cookieParser());

app.use(express.urlencoded({extended: false}))
app.use("/doctor/", dAuthRoutes);

app.use("/patients/", pAuthRoutes);

//app.use("/patients", patientsRoute);
app.get( "/profile", (request, response) => {
  const {token} = request.cookies

  if(token){
    jwt.verify(token, process.env.JWT_STRING, {}, (error, user) => {
      if(error) throw error;
      response.json(user);
    })
  }else{
    response.json("no token");
  }
});


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to TaB to Stop");
});

//database connection
mongoose
  .connect(process.env.MONGDB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("App is listening to port: " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
