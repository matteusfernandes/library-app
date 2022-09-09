const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../../api/app');
const { book } = require('../../database/models');
const { Book: bookMock }  = require('../mock/models');

chai.use(chaiHttp);
const { expect } = chai;
const findAllStub = stub(book, 'findAll');

describe('Teste de Integração da Rota GET /livros', () => {
    before(() => {
      findAllStub.callsFake(bookMock.findAll);
    });

    after(() => {
      findAllStub.restore();
    });

    describe('Consulta a lista de livros', () => {
        let response;

        before(async () => {
            response = await chai
                .request(server)
                .get('/livros');
        });

        it('Essa requisição deve retornar código de status 200', () => {
            expect(response).to.have.status(200);
        });

        it('A requisição GET para a rota traz uma lista inicial contendo dois registros de livros', () => {
            expect(response.body).to.have.length(2);
        });
    });
});
