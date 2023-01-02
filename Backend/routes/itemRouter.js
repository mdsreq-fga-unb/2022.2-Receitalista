const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const ItemController = require('../controller/itemController');

router.post('/add', checkAuth, ItemController.addItem);

router.put('/:id', checkAuth, ItemController.updateItem);

module.exports = router;