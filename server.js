const express = require("express");// import express framework,express helps to make API's
const cors = require("cors");//alows frontend/mobile apps to access backend
require("dotenv").config();//loads .end variables so now nodeJs can read port & MONGO_URI

const connectDB = require("./config/db");//import database connection function

const studentRoutes = require("./routes/studentRoutes");//import routes
const lecturerRoutes = require("./routes/LecturerRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const marksRoutes = require("./routes/marksRoutes");

const app = express();//create express app

app.use(cors());//enable CORS for all routes
app.use(express.json());//middleware to parse JSON request bodies.allows JSON to boddy reading

connectDB();//connect to database,run mongo db connection function
app.use("/api/students", studentRoutes);//use student routes for /api/students endpoint);
app.use("/api/lecturers", lecturerRoutes);//use lecturer routes for /api/lecturers endpoint
app.use("/api/subjects", subjectRoutes);
app.use("api/marks", marksRoutes);

app.listen(process.env.PORT, () => {
    console.log("server running on port "+process.env.PORT);

});