const booksService = require('../services');

module.exports = async (_request, response, next) => {
  try {
    const books = await booksService.getAll();

    return response.status(200).json(books);
  } catch (error) {
    return next(error);
  }
};
