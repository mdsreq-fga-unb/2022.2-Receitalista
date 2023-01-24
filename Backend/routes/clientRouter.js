const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const ClientController = require('../controller/clientController');

router.get('/list', checkAuth, ClientController.getAllClients);

router.post('/add', checkAuth, ClientController.addClient);

router.put('/:id', checkAuth, ClientController.updateClient);

router.delete('/:id', checkAuth, ClientController.deleteClient);

module.exports = router;
