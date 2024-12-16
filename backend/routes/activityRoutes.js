const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getActivityLogs } = require('../controllers/activityController');

// GET /activity - Get recent activity logs
router.get('/', protect, getActivityLogs);

module.exports = router;
