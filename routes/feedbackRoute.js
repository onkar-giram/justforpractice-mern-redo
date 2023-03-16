const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedbackModel");

//to get feedbacks for a respective account
router.get("/", (req, res) => {});

//to add a student feedback
router.post("/", (req, res) => {});

//to delete a feedback
router.delete("/", (req, res) => {});

module.exports = router;
