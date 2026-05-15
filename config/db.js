const mongoose = require("mongoose");//import mongoose pckge

const connectDB = async () => { //create function named connectDB
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }catch(error){
        console.log(error);
    }

};

module.exports = connectDB;