const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

//routes
const homeRoute = require('./routes/home');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');

//app
const app = express();

//db
mongoose
    .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
    })
    .then(() => console.log('БД подлкючена'));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes middleware
app.use('/', homeRoute);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});