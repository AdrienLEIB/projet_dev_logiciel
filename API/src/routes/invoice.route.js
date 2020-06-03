const express = require('express');
const router = express.Router();
const invoice = require('../controllers/invoice.controller');
const verifyToken = require('../helpers/verifyToken');
const verifyAdmin = require('../helpers/verifyAdmin');
const verifications = [ verifyToken, verifyAdmin ];

// Create a new post
router.post('/invoice', verifications, invoice.create);
router.get('/invoice', verifications, invoice.findAll);
router.get('/invoice/:id', verifications, invoice.findById);
router.patch('/invoice/:id', verifications, invoice.updateById);
router.delete('/invoice/:id', verifications, invoice.deleteByID);
router.delete('/invoice/delete/all', verifications, invoice.deleteAllInvoices);

module.exports = router;
