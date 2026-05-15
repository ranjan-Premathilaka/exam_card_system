const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({//this creates a structure of student data
  _id: String,
  name: String,
  email: String,
  username: String,
  password: String,
  department: String,
  age: Number

});

module.exports = mongoose.model('Student', studentSchema); //will connect to the mongodb collection..