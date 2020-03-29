const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const { userValidationRules, validate } = require('../helpers/validators');
const { regUser } = require('../controllers/user');
//const { userSignUpValidator } = require('../validators/user');

router.post('/signup', userValidationRules(), validate, regUser);

//router.post('/signin', signin);

module.exports = router;