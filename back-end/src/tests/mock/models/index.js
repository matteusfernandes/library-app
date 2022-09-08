const Books = require('./Books.json');

const Book = {
  findAll: async () => Books,
};

module.exports = {
  Book,
};