const express = require('express');

const book = require('./book');

const route = express.Router();

route.use('/livros', book);
