const express = require("express");
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteCompletedTask,
} = require("../controller/tasks");
const router = express.Router();

router.route("/").get(getAllTask).post(createTask).delete(deleteCompletedTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
