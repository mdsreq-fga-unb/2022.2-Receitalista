const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const ProductController = require('../controller/productController');

router.post('/add', checkAuth, ProductController.addProduct);

router.put('/:id', checkAuth, ProductController.updateProduct);

module.exports = router;