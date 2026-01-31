const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// Create event
router.post("/events", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all events
router.get("/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
