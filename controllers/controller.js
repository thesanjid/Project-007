const projectModel = require("../models/projectModel");


// Create
const createProject = async (req, res) => {
  try {
    const data = await projectModel.create(req.body);

    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    res.json({ status: "fail", error: error.message });
  }
};


// Read
const readProject = async (req, res) => {
  const data = await projectModel.find();
  res.json({ status: "success", data });
};


// Update
const updateProject = async (req, res) => {
  const data = await projectModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({ status: "success", data });
};


// Delete
const deleteProject = async (req, res) => {
  await projectModel.findByIdAndDelete(req.params.id);

  res.json({ status: "success", message: "Deleted successfully" });
};


// ✅ EXPORT ALL FUNCTIONS
module.exports = {
  createProject,
  readProject,
  updateProject,
  deleteProject,
};