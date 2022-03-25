const express = require('express');
// const { requireAuth } = require('express-openid-connect');
const routesController = require('../controllers/routesController');
const authController = require('../controllers/authController');
const router = express.Router();
// const { signup, login, isAuth } = require('../controllers/authController.js');

// GET home page 
router.get('/', routesController.home);

router.post('/login', authController.login);

router.post('/signup', authController.signup);

router.get('/private', authController.isAuth);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// // will match any other path
// router.use('/', (req, res, next) => {
//     res.status(404).json({error : "page not found"});
// });

module.exports = router;