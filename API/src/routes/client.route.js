const express = require('express');
const router = express.Router();
const client = require('../controllers/client.controller.js');


router.post('/client/register', client.create);
router.post('/client/login', client.login);
router.get('/client/:id', client.getClient);


module.exports = router;