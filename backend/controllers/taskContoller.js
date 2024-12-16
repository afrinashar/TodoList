const Task = require('../models/task');

const createTask = async (req, res) => {
  const { title, description, dueDate, assignedTo } = req.body;

  try {
    const task = new Task({
      title,
      description,
      dueDate,
      status: "To Do",
      assignedTo,
      createdBy: req.user.id,
      activityLog: [{ message: `Task created by ${req.user.id}`, timestamp: new Date() }],
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = req.user.role === "Admin" ? await Task.find().populate('assignedTo') : await Task.find({ assignedTo: req.user.id });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createTask, getTasks };
