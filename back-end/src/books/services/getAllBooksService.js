const { book } = require('../../database/models');

module.exports = async () => {
  const books = await book.findAll();

  return books;
};
