const bookService = require('../services');

module.exports = async (request, response, next) => {
  try {
    const { id } = request.params;

    const deletedBook = await bookService.deleteBook(id);

    return response.status(200).json(deletedBook);
  } catch (error) {
    return next (error);
  }
};
