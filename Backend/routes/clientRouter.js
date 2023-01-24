const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const ClientController = require('../controller/clientController');

router.post('/add', checkAuth, ClientController.addClient);

router.delete('/:id', checkAuth, ClientController.deleteClient);

module.exports = router;
