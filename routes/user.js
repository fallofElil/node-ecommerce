const express = require('express');
const router = express.Router();
const { check, oneOf, validationResult } = require('express-validator');

const { signup } = require('../controllers/user');
//const { userSignupValidator } = require('../validator');

router.post('/signup', oneOf([
        check('name', 'Необходимо указать имя').notEmpty(),
        check('email', 'Необходимо указать email')
            .matches(/.+\@.+\..+/)
            .withMessage('Email должен содержать @')
            .isLength({
                min: 4
            }),
        check('password', 'Необходимо указать пароль').notEmpty(),
        check('password')
            .isLength({min: 6})
            .withMessage('Пароль должен содержать минимум 6 символов')
        ], (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            next();
        }
), signup);

module.exports = router;