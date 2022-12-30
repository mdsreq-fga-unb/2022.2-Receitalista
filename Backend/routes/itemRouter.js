const express = require('express');
const router = express.Router();

const ItemController = require('../controller/itemController');

router.post('/add', ItemController.addItem);

module.exports = router;