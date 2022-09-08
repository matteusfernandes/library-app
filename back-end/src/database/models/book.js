const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book", 
    {
      id: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      editora: DataTypes.STRING,
      anoPublicacao: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "books",
    },
  );

  return Book;
};

module.exports = book;
