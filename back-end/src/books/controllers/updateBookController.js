const bookService = require('../services');

module.exports = async (request, response, next) => {
  try {
    const { id } = request.params;
    const book = request.body;

    const updatedBook = await bookService.updateBook(id, book);

    return response.status(200).json(updatedBook);
  } catch (error) {
    return next (error);
  }
};
