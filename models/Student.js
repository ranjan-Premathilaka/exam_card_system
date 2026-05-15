const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  username: String,
  password: String,
  department: String,
  age: Number

});

module.exports = mongoose.model('Student', studentSchema);