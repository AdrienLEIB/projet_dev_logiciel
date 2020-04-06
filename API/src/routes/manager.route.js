const express = require('express');
const router = express.Router();
const manager = require('../controllers/manager.controller');
const verifyToken = require('../helpers/verifyToken');
const verifyAdmin = require('../helpers/verifyAdmin');
const verifications = [ verifyToken, verifyAdmin ];

// Create a new post
router.post('/manager', verifications, manager.create);
router.get('/manager', verifications, manager.findAll);
router.get('/manager/:id', verifications, manager.findById);
router.patch('/manager/:id', verifications, manager.updateById);
router.delete('/manager/:id', verifications, manager.deleteByID);
router.delete('/manager/delete', verifications, manager.deleteAllManagers);

module.exports = router;
