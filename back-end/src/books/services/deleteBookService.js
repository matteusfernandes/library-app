const { book } = require('../../database/models');

module.exports = async (id) => {
  const deletedBook = await book.destroy({ where: { id } });

  return deletedBook;
};
