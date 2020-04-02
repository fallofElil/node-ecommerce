const User = require('../models/user');
const jwt = require('jsonwebtoken'); // генерация токена
const expressJwt = require('express-jwt'); // проверка авторизации

//const {errorHandler} = require('../helpers/dbErrorHandlers');

exports.regUser = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

         res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (err) {
        console.log('Error in User Registration: ' + err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

/*exports.signin = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: 'Пользователя с таким Email не существует'
            });
        }

        if (!user.authenticat(password)) {
            return res.status(401).json({
                error: 'Некорректный Email или пароль'
            })
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

        res.cookie('t', token, {expire: new Date() + 100500})

        const {_id, name, email, role} = user;

        return res.json({token, user: {_id, email, name, role}})
    });
};*/