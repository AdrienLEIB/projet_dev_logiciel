const express = require('express');
const router = express.Router();


const clientRouter = require('./client.route');

router.use(clientRouter);

module.exports = router;
