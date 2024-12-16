const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

// POST /auth/register - Register a new user
router.post('/register', registerUser);

// POST /auth/login - Login a user and return a token
router.post('/login', loginUser);

// POST /auth/logout - Logout a user
router.post('/logout', logoutUser);

module.exports = router;
