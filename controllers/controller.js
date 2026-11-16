
const projectModel = require("../models/projectModel");

// ==============================
// CREATE PROJECT
// ==============================
const createProject = async (req, res) => {
  try {
    const project = await projectModel.create(req.body);

    return res.status(201).json({
      status: "success",
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// ==============================
// GET ALL PROJECTS
// ==============================
const readProject = async (req, res) => {
  try {
    const projects = await projectModel.find();

    return res.status(200).json({
      status: "success",
      total: projects.length,
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// ==============================
// UPDATE PROJECT
// ==============================
const updateProject = async (req, res) => {
  try {
    const project = await projectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        status: "fail",
        message: "Project not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// ==============================
// DELETE PROJECT
// ==============================
const deleteProject = async (req, res) => {
  try {
    const project = await projectModel.findByIdAndDelete(
      req.params.id
    );

    if (!project) {
      return res.status(404).json({
        status: "fail",
        message: "Project not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// ==============================
// EXPORT CONTROLLERS
// ==============================
module.exports = {
  createProject,
  readProject,
  updateProject,
  deleteProject,
};
