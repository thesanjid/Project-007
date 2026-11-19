
const mongoose = require("mongoose");

// Project Schema
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    short_des: {
      type: String,
      trim: true,
    },

    des: {
      type: String,
      trim: true,
    },

    img: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Project Model
const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
