const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller');
const verifyToken = require('../helpers/verifyToken');
const verifyAdmin = require('../helpers/verifyAdmin');
const verifications = [ verifyToken, verifyAdmin ];

// Create a new post
router.post('/product', verifications, product.create);
router.get('/product', product.findAll);
router.get('/search/:name', product.findByName);
router.get('/productOfMother/:id', product.findByIdMother);
router.get('/product/:id', product.findById);
router.patch('/product/:id', verifications, product.updateById);
router.delete('/product/:id', verifications, product.deleteByID);
router.delete('/product/delete/all', verifications, product.deleteAllproducts);

module.exports = router;
