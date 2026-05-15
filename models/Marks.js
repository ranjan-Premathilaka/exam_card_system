const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    student:{
        type: String,
        ref: "Student"
    },
    subject:{
        type: String,
        ref: "Subject"
    },
    ICA01: Number,
    ICA02: Number,
    ICA03: Number,

    attendance: Number,
    eligibility: Boolean

});

module.exports = mongoose.model("Marks", marksSchema);