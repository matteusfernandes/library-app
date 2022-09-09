const booksService = require('../services');

module.exports = async (_request, response, next) => {
  try {
    const { id } = request.params;

    const book = await booksService.getBookById(id);

    return response.status(200).json(book);
  } catch (error) {
    return next(error);
  }
};
