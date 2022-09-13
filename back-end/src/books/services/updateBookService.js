const utils = require('../../utils');
const { book } = require('../../database/models');

module.exports = async (id, bookData) => {
  const idBook = await book.findOne({ where: { id } });

  if (!idBook) throw utils.error(404, 'livro não encontrado');

  const [updatedUser] = await book.update({...bookData }, { where: { id } });

  return updatedUser;
};
