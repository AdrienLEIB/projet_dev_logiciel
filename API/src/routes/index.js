const express = require('express');
const router = express.Router();

const golfRouter = require('./golf.route');
const managerRouter = require('./manager.route');
const adminRouter = require('./auth.route');

router.use(golfRouter);
router.use(managerRouter);
router.use(adminRouter);

module.exports = router;
