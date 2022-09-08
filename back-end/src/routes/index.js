const express = require('express');

const book = require('./bookRoute');

const route = express.Router();

route.use('/livros', book);

module.exports = route;