const { check, validationResult } = require('express-validator');

exports.userSignUpValidator = {
    check: [
        check('name')
            .not()
            .isEmpty()
            .withMessage('Поле имени не должно быть пустыим'),
        check('email')
            .isEmail()
            .withMessage('Укажите корректное значение Email'),
        check('password')
            .not()
            .isEmpty()
            .withMessage('Поле пароля не должно быть пустым'),
        check('password')
            .isLength({min: 6})
            .withMessage('Пароль должен содержать минимум 6 символов')],
    queries: (req, res, next) => {
        const errors = validationResult(req);
        console.log(req.body);

        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        } else {
            res.send({});
        }
        next();
    }
};