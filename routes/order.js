const express = require('express');
const router = express.Router();

//const { requireSignIn, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { create } = require('../controllers/order');

router.post('/order/create/:userId', create);

router.param('userId', userById);

module.exports = router;