const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book", 
    {
      titulo: DataTypes.STRING,
      editora: DataTypes.STRING,
      anoPublicacao: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "livros",
    },
  );

  return Book;
};

module.exports = Book;
