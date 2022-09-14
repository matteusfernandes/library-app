const utils = require('../../utils');
const { book } = require('../../database/models');

module.exports = async (id) => {
  const idBook = await book.findOne({ where: { id } });

  if (!idBook) throw utils.error(404, 'livro não encontrado');

  const deletedBook = await book.destroy({ where: { id } });

  return { id: deletedBook, message: 'livro deletado com sucesso' };
};
