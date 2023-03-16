const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DATABASE CONNECTED ");
  } catch (error) {
    console.log(`error at db.js : ${error}`);
  }
};

module.exports = connectDB;
