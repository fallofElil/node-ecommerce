const User = require('../models/user');
const {errorHandler} = require('../helpers/dbErrorHandlers');

exports.signup = (req, res) => {
    console.log("request user body:", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }

        res.json({
            user
        });
    });
};