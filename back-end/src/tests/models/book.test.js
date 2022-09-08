const { expect } = require('chai');
const { book: Book } = require('../../database/models');

describe('Teste do model Book', () => {
  it('possui a propriedade "id"', () => {
    const book = new Book();
    expect(book).to.have.property('id');
  });

  it('possui a propriedade "titulo"', () => {
    const book = new Book();
    expect(book).to.have.property('titulo');
  });

  it('possui a propriedade "editora"', () => {
    const book = new Book();
    expect(book).to.have.property('editora');
  });

  it('possui a propriedade "ano de publicação"', () => {
    const book = new Book();
    expect(book).to.have.property('anoPublicacao');
  });
});
