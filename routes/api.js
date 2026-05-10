const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

router.post("/create-project", controller.createProject);
router.get("/read-project", controller.readProject);
router.put("/update-project/:id", controller.updateProject);
router.delete("/delete-project/:id", controller.deleteProject);

module.exports = router;