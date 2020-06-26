const express = require("express");
const router = express.Router();

// @route   GET api/task-list
// @desc    Get user's taskList
// @acces   Private
router.get("/", (req, res) => {
  res.send("Get user's task list");
});

// @route   POST api/task-list
// @desc    Add new task
// @acces   Private
router.post("/", (req, res) => {
  res.send("Add new task");
});

// @route   PUT api/task-list/:id
// @desc    Update task
// @acces   Private
router.put("/:id", (req, res) => {
  res.send("Update task");
});

// @route   DELETE api/task-list/:id
// @desc    Delete task
// @acces   Private
router.post("/:id", (req, res) => {
  res.send("Delete task");
});

module.exports = router;