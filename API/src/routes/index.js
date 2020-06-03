const express = require('express');
const router = express.Router();

const clientRouter = require('./client.route');
const productRouter = require('./product.route');
const motherproductRouter = require('./motherproduct.route');
const invoiceRouter = require('./invoice.route');
router.use(clientRouter);
router.use(productRouter);
router.use(motherproductRouter);
router.use(invoiceRouter);
module.exports = router;
