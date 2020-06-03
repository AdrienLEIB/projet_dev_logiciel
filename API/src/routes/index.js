const express = require('express');
const router = express.Router();

const basketRouter = require('./basket.route');
const clientRouter = require('./client.route');
const productRouter = require('./product.route');
const motherproductRouter = require('./motherproduct.route');
const invoice2Router = require('./invoice.route');
router.use(clientRouter);
router.use(productRouter);
router.use(motherproductRouter);
router.use(basketRouter);
router.use(invoice2Router);
module.exports = router;
