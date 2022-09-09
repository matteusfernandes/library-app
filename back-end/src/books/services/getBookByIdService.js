const { book } = require('../../database/models');

module.exports = async (id) => {
  const foundedBook = await book.findAll({
    where: {id},
  });

  return foundedBook[0];
};
