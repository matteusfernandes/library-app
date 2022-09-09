const express = require('express');

const booksController = require('../books/controllers');

const bookRouter = express.Router();

bookRouter.get('/', booksController.getAll);
bookRouter.get('/:id', booksController.getBoookById);

module.exports = bookRouter;
