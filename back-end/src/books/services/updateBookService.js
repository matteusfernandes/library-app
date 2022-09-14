const { book } = require('../../database/models');

module.exports = async (id, bookData) => {
  const updatedBook = await book.update({...bookData }, { where: { id } });

  return updatedBook;
};
