require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Routes
const api = require("./routes/api");
app.use("/api/v1", api);


// MongoDB Connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


// Test Route
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});


// Server Run
app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});