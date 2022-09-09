const booksService = require('../services');

module.exports = async (request, response, next) => {
  try {
    const { id } = request.params;

    const book = await booksService.getBookById(id);

    if (!book) return response.status(404).json({ message: 'Book not Found'});

    return response.status(200).json(book);
  } catch (error) {
    return next(error);
  }
};
