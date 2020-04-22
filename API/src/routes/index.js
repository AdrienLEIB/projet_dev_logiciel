const express = require('express');
const router = express.Router();


const clientRouter = require('./client.route');
//const productRouter = require('./product.route');

router.use(clientRouter);
//route.use(productRouter);

module.exports = router;
