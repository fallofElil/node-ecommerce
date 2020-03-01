const express = require('express');
const router = express.Router();

const { helloThere } = require('../controllers/user');

router.get('/', helloThere);

module.exports = router;