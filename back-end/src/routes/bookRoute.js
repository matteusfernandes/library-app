const express = require('express');

const booksController = require('../books/controllers');

const bookRouter = express.Router();

bookRouter.get('/', booksController.getAll);
bookRouter.get('/:id', booksController.getBookById);

module.exports = bookRouter;
