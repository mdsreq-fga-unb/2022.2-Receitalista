const express = require('express');
const router = express.Router();

const UserController = require('../controller/userController');

router.post('/signup', UserController.userSignUp);

router.post('/login', UserController.userLogIn);

module.exports = router;