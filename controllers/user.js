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
