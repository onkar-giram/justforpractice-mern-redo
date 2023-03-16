const express = require("express");
const connectDB = require("./database/db");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoute"));

app.listen(PORT, () => {
  console.log(`SERVER CONNECTED TO PORT: ${PORT}`);
  connectDB();
});
