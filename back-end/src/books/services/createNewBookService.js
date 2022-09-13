const { book } = require('../../database/models');

module.exports = async (bookData) => {
  const newBook = await book.create(bookData);

  return newBook;
};
