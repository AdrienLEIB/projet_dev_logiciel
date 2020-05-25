const express = require('express');
const router = express.Router();

const basketRouter = require('./basket.route');
const clientRouter = require('./client.route');
const productRouter = require('./product.route');
const motherproductRouter = require('./motherproduct.route');
const invoiceRouter = require('./invoice.route');
router.use(clientRouter);
router.use(productRouter);
router.use(motherproductRouter);
router.use(invoiceRouter);
router.use(basketRouter);

module.exports = router;
