const express = require('express');
const router = express.Router();
const auth = require('../controllers/account.controller.js');


router.post('/auth/register', auth.create);
router.post('/auth/login', auth.login);
router.get('/user/:id', auth.getAccount);


module.exports = router;