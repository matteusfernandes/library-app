const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../../api/app');
const { book } = require('../../database/models');
const { Book: bookMock }  = require('../mock/models');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de integração:', () => {
    describe('Teste de Integração da Rota GET /livros', () => {
        const findAllStub = stub(book, 'findAll');
        let response;

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

});

