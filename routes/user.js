const express = require('express');
const router = express.Router();

const { requireSignIn, isAuth, isAdmin } = require('../controllers/auth');

const { userById, getAllUsers } = require('../controllers/user');

router.get('/secret/:userId', requireSignIn, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.param('userId', userById);

router.get('/users', getAllUsers);

module.exports = router;
