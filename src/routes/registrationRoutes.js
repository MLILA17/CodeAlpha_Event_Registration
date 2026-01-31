const express = require("express");
const Registration = require("../models/Registration");

const router = express.Router();

// Register for event
router.post("/register", async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// View registrations
router.get("/registrations", async (req, res) => {
  const registrations = await Registration.find().populate("eventId");
  res.json(registrations);
});

module.exports = router;
