const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const orderController = require('../controller/orderController');

router.post('/add', checkAuth, orderController.addOrder);

router.delete('/:id', checkAuth, orderController.deleteOrder);

module.exports = router;