const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//app
const app = express();

//db
mongoose
    .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
    })
    .then(() => console.log('БД подлкючена'));

//rotes
app.get('/', (req, res) => {
    res.send('is works bitch')
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});