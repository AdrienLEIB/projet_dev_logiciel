const express = require('express');
const router = express.Router();
const golf = require('../controllers/golf.controller');
const verifyToken = require('../helpers/verifyToken');
const verifyAdmin = require('../helpers/verifyAdmin');
const verifications = [ verifyToken, verifyAdmin ];

// Create a new post
router.post('/golf', verifications, golf.create);
router.get('/golf', verifications, golf.findAll);
router.get('/golf/:id', verifications, golf.findById);
router.patch('/golf/:id', verifications, golf.updateById);
router.delete('/golf/:id', verifications, golf.deleteByID);
router.delete('/golf/delete', verifications, golf.deleteAllGolfs);

module.exports = router;
