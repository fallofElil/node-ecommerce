const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
    return [
        body('name')
            .not()
            .isEmpty()
            .withMessage('Поле имени не должно быть пустыим'),
        body('email')
            .isEmail()
            .withMessage('Укажите корректное значение Email'),
        body('password')
            .not()
            .isEmpty()
            .withMessage('Поле пароля не должно быть пустым'),
        body('password')
            .isLength({min: 6})
            .withMessage('Пароль должен содержать минимум 6 символов'),
        /*body('confirmPassword')
            .equals()*/
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
};

module.exports = {
    userValidationRules,
    validate,
};