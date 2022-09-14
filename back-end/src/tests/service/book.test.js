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
        "titulo": "O Código Da Vinci",
        "editora": "Random House",
        "anoPublicacao": 2004
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

  // describe('#update', () => {
  //   const updateStub = stub(book, 'update');
  //   const testBook = {
  //     titulo: "Da Vinci O Código",
  //     editora: "House Random",
  //     anoPublicacao: 4002,
  //   };
  //   let updated;

  //   describe('quando existe o livro', () => {
  //     before(async () => {
  //       updateStub.resolves([true]);

  //       updated = await BookService.updateBook(1, testBook);
  //       console.log(updated);
  //     });
        
  //     after(() => {
  //       updateStub.reset();
  //     });
  
  //     it('called Book.update', async () => {
  //       expect(book.update.calledOnce).to.be.equals(true);
  //     });
  
      
  //     it('retorna o livro atualizado', async () => {
  //       expect(updated).to.be.true;
  //     });
  //   });

  //   describe('quando não existe o livro', () => {
  //     before(async () => {
  //       updateStub.resolves([false]);
  //       updated = await BookService.updateBook(1000, testBook)
  //     });
        
  //     after(() => {
  //       updateStub.reset();
  //     });
  
  //     it('called Book.update', async () => {
  //       expect(book.update.calledOnce).to.be.equals(true);
  //     });
  
  //     it('retorna 0', async () => {
  //       expect(updated).to.be.false;
  //     });
  //   });
  // });

  describe('#remove', () => {
    const removeStub = stub(book, 'destroy');

    let removed;

    describe('quando existe o livro', () => {
      before(async () => {
        removeStub.resolves(true);
        removed = await BookService.deleteBook(2);
      });
        
      after(() => {
        removeStub.reset();
      });
  
      it('called Book.destroy', async () => {
        expect(book.destroy.calledOnce).to.be.equals(true);
      });
  
      it('retorna true', async () => {
        expect(removed).to.be.eq(true);
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        removeStub.resolves(false);
        updated = await BookService.deleteBook(1000)
      });
        
      after(() => {
        removeStub.reset();
      });
  
      it('called Book.update', async () => {
        expect(book.destroy.calledOnce).to.be.equals(true);
      });
  
      
      it('retorna false', async () => {
        expect(updated).to.be.equals(false);
      });
    });
  });
});
