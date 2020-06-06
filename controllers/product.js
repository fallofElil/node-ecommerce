const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Product = require('../models/product');
const { errorHandler } = require('../helpers/dbErrorHandlers');

//TODO реализовать нормальную валидацию

exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            console.debug('PRODUCT ID ', id);
            return res.status(400).json({
                error: 'Невозможно найти данный товар'
            });
        }
        req.product = product;
        next();
    });
};

exports.getProduct = (req, res) => {
    req.product.prodImage = undefined;
    return res.json(req.product);
}

exports.createProduct = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req , (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Невозможно загрузить изображение'
            });
        }

        let product = new Product(fields);

        if (files.photo) {
            if (files.photo.size > (5 * Math.pow(1000, 2))) {
                return res.status(400).json({
                   error: 'Превышен максимальный размер загрузки (5 Мб)'
                });
            }
            console.debug('PRODUCT IMAGE ', files.photo);
            product.prodImage.data = fs.readFileSync(files.photo.path);
            product.prodImage.contentType = files.photo.type
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err),
                });
            }
            res.json(result);
        })
    })
};

exports.updateProduct = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req , (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Невозможно загрузить изображение'
            });
        }

        let product = req.product;
        product = _.extend(product, fields);

        if (files.prodImage) {
            if (files.prodImage.size > (5 * Math.pow(1000, 2))) {
                return res.status(400).json({
                    error: 'Превышен максимальный размер загрузки (5 Мб)'
                });
            }
            console.debug('PRODUCT IMAGE ', files.photo);
            product.prodImage.data = fs.readFileSync(files.photo.path);
            product.prodImage.contentType = files.photo.type
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err),
                });
            }
            res.json(result);
        })
    })
}

exports.removeProduct = (req, res) => {
    let product = req.product;
    product.remove((err, removedProduct) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            "message": `Товар с идентификатором ${removedProduct._id} удалён успешно`
        });
    })
}

exports.getAllProducts = async (req, res) => {
    Product.find()
        .exec((error, products) => {
            if (error) {
                return res.status(400).json({
                    error: 'Нет подходящей продукции'
                });
            }
            res.json(products)
        });
}
