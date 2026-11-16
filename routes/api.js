
const express = require("express");
const router = express.Router();

// Import Project Controller
const {
  createProject,
  readProject,
  updateProject,
  deleteProject,
} = require("../controllers/controller");

// ==============================
// PROJECT ROUTES
// ==============================

// Create Project
router.post("/create-project", createProject);

// Read All Projects
router.get("/read-project", readProject);

// Update Project
router.put("/update-project/:id", updateProject);

// Delete Project
router.delete("/delete-project/:id", deleteProject);

// Export Router
module.exports = router;
