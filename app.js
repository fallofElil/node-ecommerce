const express = require('express');
const mongoose = require('mongoose');
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

//routes middleware
app.use(userRoutes);


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});