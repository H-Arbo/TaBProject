import express from "express";
import { PORT, mongoDBURL, mongodb_docker } from "./config.js";
import mongoose from "mongoose";
import patientsRoute from "./routes/patientsRoute.js";
import dAuthRoutes from "./routes/dAuthRoutes.js";
import pAuthRoutes from "./routes/pAuthRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv/config.js";
import jwt from "jsonwebtoken";

const app = express();
app.disable("x-powered-by");
//middleware for parsing request body
app.use(express.json());
var allowedOrigins = ["http://localhost:8080", "http://localhost:5173", "http://cs495-spring2024-01.ua.edu:8080", "http://10.8.97.14:25432"];
//cors middleware
app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin."+ origin;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use("/doctor/", dAuthRoutes);

app.use("/patients/", pAuthRoutes);

//app.use("/patients", patientsRoute);
app.get("/profile", (request, response) => {
  const { token } = request.cookies;

  console.log("token in index.js: " + token);

  if (token) {
    jwt.verify(token, process.env.JWT_STRING, {}, (error, user) => {
      if (error) throw error;
      response.json(user);
    });
  } else {
    response.json(null);
  }
});

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to TaB to Stop");
});

//database connection
mongoose
  .connect(mongodb_docker)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("App is listening to port: " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
