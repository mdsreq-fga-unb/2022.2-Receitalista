const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const orderController = require('../controller/orderController');

router.post('/add', checkAuth, orderController.addOrder);

router.delete('/:id', checkAuth, orderController.deleteOrder);

router.put('/:id', checkAuth, orderController.updateOrder);

router.get('/list', checkAuth, orderController.getAllOrders);

router.put('/:id', checkAuth, orderController.getOrder);

router.get('/report', checkAuth, orderController.getReport);

module.exports = router;