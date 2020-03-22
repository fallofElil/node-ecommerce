const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(
        `
            <h1 style="font-family: sans-serif">Главная страница</h1>
            <p style="font-family: sans-serif">Ты находишься на главной странице, прими это</p>
            `
    );
});

module.exports = router;