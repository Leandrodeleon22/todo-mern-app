const Task = require("../model/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError, customAPIError } = require("../errors/custom-error");

const getAllTask = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No Task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  console.log(task);
  if (!task) {
    return next(customAPIError(`No task with id: ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const deleteCompletedTask = asyncWrapper(async (req, res, next) => {
  const filter = { completed: true };

  const task = await Task.deleteMany(filter);
  console.log(task);
  if (task.deletedCount > 0) {
    res.status(200).json({ task });
  } else {
    return next(customAPIError(`No completed task found to delete`, 404));
  }
});

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteCompletedTask,
};
