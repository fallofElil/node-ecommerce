const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//routes
const userRoutes = require('./routes/user');

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

//routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});