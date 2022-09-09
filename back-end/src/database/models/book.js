const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book", 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
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
