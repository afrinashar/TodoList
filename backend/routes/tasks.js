const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  assignTask,
} = require('../controllers/taskController');

// GET /tasks - Get all tasks (Admins) or assigned tasks (Users)
router.get('/', protect, getTasks);

// POST /tasks - Create a new task (Admins only)
router.post('/', protect, authorize('Admin'), createTask);

// PUT /tasks/:id - Update a task
router.put('/:id', protect, updateTask);

// DELETE /tasks/:id - Delete a task (Admins only)
router.delete('/:id', protect, authorize('Admin'), deleteTask);

// PUT /tasks/assign/:id - Assign a task to a user
router.put('/assign/:id', protect, authorize('Admin'), assignTask);

module.exports = router;
