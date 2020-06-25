const {Order, CartItem} = require('../models/order');

exports.create = (req, res) => {
    //console.debug('CREATE ORDER: ', req.body)
    req.body.order.user = req.profile
    const order = new Order(req.body.order)
    order.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Ошибка записи БД'
            })
        }
        res.json(data);
    })
};