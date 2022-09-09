const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../../api/app');
const { book } = require('../../database/models');
const { Book: bookMock }  = require('../mock/models');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de integração:', () => {
    const findAllStub = stub(book, 'findAll');
    let response;

    describe('Teste de Integração da Rota GET /livros', () => {
        describe('Quando existem livros cadastrados', async () => {
            before(async () => {
                findAllStub.callsFake(bookMock.findAll);
                response = await chai
                    .request(server)
                    .get('/livros');
                });
          
              after(() => {
                findAllStub.restore();
              });
    
            it('Essa requisição deve retornar código de status 200', async () => {
                expect(response).to.have.status(200);
            });
    
            it('A requisição GET para a rota traz uma lista inicial contendo dois registros de livros', async () => {
                expect(response.body).to.have.length(2);
            });
        });

        describe('Quando não existem livros cadastrados', async () => {
            before(async () => {
                findAllStub.resolves([]);
                response = await chai
                    .request(server)
                    .get('/livros');
                });
          
              after(() => {
                findAllStub.restore();
              });
    
            it('Essa requisição deve retornar código de status 200', async () => {
                expect(response).to.have.status(200);
            });
    
            it('A requisição GET para a rota traz uma lista vazia', async () => {
                expect(response.body).to.have.length(0);
            });
        });
    });

    describe('Teste de Integração da Rota GET /livros/:id', () => {
        const expectErrorMessage = { "message": "Book not Found" };
        const expectBook =
            {
                "id": 1,
                "titulo": "Harry Potter e a Pedra Filosofal",
                "editora": "Bloomsbury Publishing",
                "anoPublicacao": 1997
            };

        describe('Quando existe o livro procurado', async () => {
            before(async () => {
                findAllStub.callsFake(bookMock.findById);
                response = await chai
                    .request(server)
                    .get('/livros/1');
                });
          
              after(() => {
                findAllStub.restore();
              });
    
            it('Essa requisição deve retornar código de status 200', async () => {
                expect(response).to.have.status(200);
            });
    
            it('A requisição GET para a rota traz o elemento de ID 1', async () => {
                expect(response.body).to.deep.equal(expectBook);
            });
        });

        describe('Quando não existe o livro procurado', async () => {
            before(async () => {
                findAllStub.resolves([]);
                response = await chai
                    .request(server)
                    .get('/livros/0');
                });
          
              after(() => {
                findAllStub.restore();
              });
    
            it('Essa requisição deve retornar código de status 204', async () => {
                expect(response).to.have.status(404);
            });
    
            it('A requisição GET para a rota traz a mensagem "Book not Found"', async () => {
                expect(response.body).to.deep.equal(expectErrorMessage);
            });
        });
    });

});

