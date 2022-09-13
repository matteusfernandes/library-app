const utils = require('../../utils');
const { book } = require('../../database/models');

module.exports = async (id, bookData) => {
  const idBook = await book.findOne({ where: { id } });

  if (!idBook) throw utils.error(404, 'livro não encontrado');

  await book.update({...bookData }, { where: { id } });
  const updatedBook = await book.findOne({ where: id });

  return updatedBook;
};
