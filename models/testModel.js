const mongoose = require("mongoose");

const Test = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
});

//name
//subject
//year
//stream

module.exports = mongoose.model("Test", Test);
