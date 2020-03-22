const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/user');
const { userSignUpValidator } = require('../validators/user');

router.post('/signup', userSignUpValidator.check, userSignUpValidator.queries, signup);

module.exports = router;