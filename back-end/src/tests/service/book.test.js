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

  describe('#create', () => {
    describe('retorna o registro do livro criado', () => {
      const createStub = stub(book, 'create');
      let books;
      const newBook = {
        "titulo": "O Chamado de Cthulhu",
        "editora": "Darkside",
        "anoPublicacao": 2021
    };
  
      before(async () => {
        createStub.resolves({
          id: 4,
          ...newBook,
        });
  
        books = await BookService.createNewBook(newBook);
      });
  
      after(() => {
        createStub.reset();
      });
  
      it('called Book.create', async () => {
        expect(book.create.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(books).to.include(newBook);
      });
    });
  });
});
