const express = require('express');
const router = express.Router();

const { signup, signin } = require('../controllers/user');
const { userSignUpValidator } = require('../validators/user');

router.post('/signup', userSignUpValidator.check, userSignUpValidator.queries, signup);
router.post('/signin', signin);

module.exports = router;