const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ["To Do", "In Progress", "Done"], default: "To Do" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  activityLog: [{ message: String, timestamp: Date }],
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
