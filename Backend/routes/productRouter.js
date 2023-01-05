const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const ProductController = require('../controller/productController');

router.post('/add', checkAuth, ProductController.addProduct);

router.get('/list', checkAuth, ProductController.getAllProduct);

router.get('/:id', checkAuth, ProductController.getProduct);

router.put('/:id', checkAuth, ProductController.updateProduct);

router.delete('/:id', checkAuth, ProductController.deleteProduct);

module.exports = router;