/*const { check, validationResult } = require('express-validator');

exports.userSignupValidator = [
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
    }*/

    
/*exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Необходимо указать имя').notEmpty();
    req.check('email', 'Необходимо указать email')
        .matches(/.+\@.+\..+/)
        .withMessage('Email должен содержать @')
        .isLength({
            min: 4
        });
    req.check('password', 'Необходимо указать пароль').notEmpty();
    req.check('password')
        .isLength({
            min: 6
        })
        .withMessage('Пароль должен содержать минимум 6 символов');

    const errors = req.validationErrors();
    if(errors) {
        const firtsError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firtsError });
    }
    next();
};*/