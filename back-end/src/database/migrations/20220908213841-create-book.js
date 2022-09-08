'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        field: "titulo",
        allowNull: false,
      },
      editora: {
        type: Sequelize.STRING,
        field: "editora",
        allowNull: false,
      },
      anoPublicacao: {
        type: Sequelize.INTEGER,
        field: "ano_publicacao",
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};
