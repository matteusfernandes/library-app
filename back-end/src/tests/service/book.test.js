const { expect } = require('chai');
const { stub } = require('sinon');

const { book } = require('../../database/models');
const BookService = require('../../books/services');
const { Book: bookMock }  = require('../mock/models');

describe('BookService', () => {
  describe('#getAll', () => {
    const findAllStub = stub(book, 'findAll');
    let books;

    describe('quando não existe nenhum livro cadastrado', () => {
      before(async () => {
        findAllStub.resolves([]);
        books = await BookService.getAll();
      });
  
      after(() => {
        findAllStub.reset();
      });
  
      it('called Book.findAll', () => {
        expect(book.findAll.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um array', () => {
        expect(books).to.be.an('array');
      });
  
      it('o array está vazio', () => {
        expect(books).to.be.empty;
      });
    });

    describe('quando existem livros cadastrados', () => {
      before(async () => {
        findAllStub.resolves(await bookMock.findAll());
        books = await BookService.getAll();
      });
  
      after(() => {
        findAllStub.restore();
      });
  
      it('called Book.findAll', async () => {
        expect(book.findAll.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um array', async () => {
        expect(books).to.be.an('array');
      });
  
      it('o array deve retornar objetos', async () => {
        expect(books).to.be.deep.equal(await bookMock.findAll());
      });
    });
  });
});
