const express = require('express');
// const { requireAuth } = require('express-openid-connect');

const userController = require('../controllers/userController');
const router = express.Router();

// GET users 
router.get('/', userController.getUsers);

// Get a specific user
router.get('/:id', userController.getAUser);

module.exports = router;