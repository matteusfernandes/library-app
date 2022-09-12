const Books = require('./Books.json');

const Book = {
  findAll: async () => Books,
  findByPk: async () => Books[0],
};

module.exports = {
  Book,
};