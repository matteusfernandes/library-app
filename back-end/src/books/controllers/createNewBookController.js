const booksService = require('../services');

module.exports = async (request, response, next) => {
  try {
    const newBook = request.body;

    const book = await booksService.createNewBook(newBook);

    return response.status(201).json(book);
  } catch (error) {
    return next(error);
  }
};
