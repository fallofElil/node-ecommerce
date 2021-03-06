const express = require('express');
const router = express.Router();

const { create, get } = require('../controllers/category');
const { requireSignIn, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.post(
    '/category/create/:userId',
    requireSignIn,
    isAuth,
    isAdmin,
    create
);

router.get('/categories', get);

router.param('userId', userById);

module.exports = router;