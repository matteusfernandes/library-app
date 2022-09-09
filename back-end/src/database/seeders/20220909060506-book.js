'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('livros',
    [
      {
        "titulo": "Harry Potter e a Pedra Filosofal",
        "editora": "Bloomsbury Publishing",
        "ano_publicacao": 1997
      },
      {
        "titulo": "O Senhor dos Anéis",
        "editora": "Allen & Unwin",
        "ano_publicacao": 1954
      },
    ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('livros', null, {}),
};
