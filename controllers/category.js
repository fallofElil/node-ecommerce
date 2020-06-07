const Category = require('../models/category');

exports.create = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                category: newCategory
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

exports.get = async (req, res) => {
    Category.find()
        .exec((error, categories) => {
            if (error) {
                return res.status(400).json({
                    error: 'Нет подходящей категории'
                });
            }
            res.json(categories)
        });
}