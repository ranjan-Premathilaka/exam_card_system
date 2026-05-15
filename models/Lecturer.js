const mongoose = require("mongoose");

const lecturerSchema = new mongoose.Schema({

    _id: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    job_title: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Lecturer", lecturerSchema);