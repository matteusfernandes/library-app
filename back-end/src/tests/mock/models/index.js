const Books = require('./Books.json');

const Book = {
  findAll: async () => Books,
  findById: async () => Books[0],
};

module.exports = {
  Book,
};