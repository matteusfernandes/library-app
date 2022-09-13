const booksService = require('../services');

module.exports = async (request, response, next) => {
  try {
    const newBook = request.body;

    const book = await booksService.createBook(newBook);

    return response.status(201).json(book);
  } catch (error) {
    return next(erros);
  }
};
