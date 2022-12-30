const express = require('express');
const router = express.Router();

const ProductController = require('../controller/productController');

router.post('/add', ProductController.addProduct);

module.exports = router;