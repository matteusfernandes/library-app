const { book } = require('../../database/models');

module.exports = async (id) => {
  const foundedBook = await book.findByPk(id)

  return foundedBook;
};
