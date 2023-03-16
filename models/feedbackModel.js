const mongoose = require("mongoose");

const Feedback = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  testId: {
    text: String,
  },
  feedback: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Feedback", Feedback);

//mongoose.Schema.Types.ObjectId,
//ref: "User",

//mongoose.Schema.Types.ObjectId,
//ref: "Test",
