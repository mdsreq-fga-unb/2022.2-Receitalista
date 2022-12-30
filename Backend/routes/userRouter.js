const express = require('express');
const router = express.Router();

const UserController = require('../controller/userController');

router.post('/signup', UserController.userSignUp);

router.post('/login', UserController.userLogIn);

router.put('/:id', UserController.userUpdate);

module.exports = router;