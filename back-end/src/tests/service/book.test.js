const { expect } = require('chai');
const { stub } = require('sinon');

const { book } = require('../../database/models');
const BookService = require('../../books/services');
const { Book: bookMock }  = require('../mock/models');

describe(' Teste dos services de Book', () => {
  describe('#getAll', () => {
    const findAllStub = stub(book, 'findAll');
    let books;

    describe('Quando não existe nenhum livro cadastrado', () => {
      before(async () => {
        findAllStub.resolves([]);
        books = await BookService.getAll();
      });
  
      after(() => {
        findAllStub.reset();
      });
  
      it('chama a função Book.findAll', () => {
        expect(book.findAll.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um array', () => {
        expect(books).to.be.an('array');
      });
  
      it('o array está vazio', () => {
        expect(books).to.be.empty;
      });
    });

    describe('Quando existem livros cadastrados', () => {
      before(async () => {
        findAllStub.resolves(await bookMock.findAll());
        books = await BookService.getAll();
      });
  
      after(() => {
        findAllStub.restore();
      });
  
      it('chama a função Book.findAll', async () => {
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

  describe('#getById', () => {
    const findByPkStub = stub(book, 'findByPk');
    let books;

    describe('quando existe o livro', () => {
      before(async () => {
        findByPkStub.resolves(bookMock.findByPk);
        books = await BookService.getBookById(1);
      });
  
      after(() => {
        findByPkStub.reset();
        books = null;
      });
  
      it('called Book.findByPk', async () => {
        expect(book.findByPk.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(books).to.deep.equal(bookMock.findByPk);
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        findByPkStub.resolves(null);
        books = await BookService.getBookById(1000);
      });
  
      after(() => {
        findByPkStub.reset();
        books = null;
      });
  
      it('called Book.findByPk', async () => {
        expect(book.findByPk.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(books).to.be.null
      });
    });
  });
});
