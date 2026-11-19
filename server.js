
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const apiRoutes = require("./routes/api");

// API Routes
app.use("/api/v1", apiRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server Running Successfully",
  });
});

// MongoDB Connection & Server Start
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);

    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

// Start Application
startServer();

});
