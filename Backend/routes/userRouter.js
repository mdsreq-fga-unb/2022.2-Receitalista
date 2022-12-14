const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const UserController = require('../controller/userController');

router.post('/signup', UserController.userSignUp);

router.post('/login', UserController.userLogIn);

router.put('/', checkAuth, UserController.userUpdate);

router.put('/password', checkAuth, UserController.userUpdatePassword);

router.get('/', checkAuth, UserController.userGet);

router.delete('/', checkAuth, UserController.userDelete);

module.exports = router;