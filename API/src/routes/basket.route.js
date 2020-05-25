const express = require('express');
const router = express.Router();
const verifyToken = require('../helpers/verifyToken');
const verifyAdmin = require('../helpers/verifyAdmin');
const verifications = [ verifyToken, verifyAdmin ];
const basket = require('../controllers/basket.controller');

// Create a new post

router.get('/basket',  basket.createBasket);

router.post('/basket', basket.addBasket);

module.exports = router;
