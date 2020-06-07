const express = require('express');
const router = express.Router();

const {
    createProduct,
    productById,
    getProduct,
    removeProduct,
    updateProduct,
    getAllProducts
} = require('../controllers/product');
const { requireSignIn, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/products', getAllProducts);
router.get('/product/:productId', getProduct);
router.post('/product/create/:userId', requireSignIn, isAuth, isAdmin, createProduct);
router.post('/product/t-create', createProduct);
router.delete('/product/:productId/:userId', requireSignIn, isAuth, isAdmin, removeProduct);
router.put('/product/:productId/:userId', requireSignIn, isAuth, isAdmin, updateProduct);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;