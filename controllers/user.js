const User = require('../models/user');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'Пользователь не найден'
            });
        }
        req.profile = user;
        next();
    });
};

exports.getAllUsers = async (req, res, next) => {
    User.find({}, (err, users) => {
        res.json({ users: users });
        next();
    })
};
