const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const UserController = require('../controller/userController');

router.post('/signup', UserController.userSignUp);

router.post('/login', UserController.userLogIn);

router.put('/:id', checkAuth, UserController.userUpdate);

module.exports = router;