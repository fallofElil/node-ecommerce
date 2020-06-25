const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const { userValidationRules, validate } = require('../helpers/validators');

const {
    regUser,
    signIn,
    signOut,
    requireSignIn
} = require('../controllers/auth');

router.post('/signup', userValidationRules(), validate, regUser);
router.post('/signin', signIn);
router.get('/signout', signOut);

module.exports = router;