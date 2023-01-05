const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const ItemController = require('../controller/itemController');

router.get('/list', checkAuth, ItemController.getAllItem);

router.get('/:id', checkAuth, ItemController.getItem);

router.post('/add', checkAuth, ItemController.addItem);

router.put('/:id', checkAuth, ItemController.updateItem);

router.delete('/:id', checkAuth, ItemController.deleteItem);

module.exports = router;