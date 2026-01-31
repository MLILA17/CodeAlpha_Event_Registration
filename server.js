const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express(); // ✅

app.use(express.json());

// routes
const eventRoutes = require("./src/routes/eventRoutes");
app.use("/api", eventRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Event Registration API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
