const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../../api/server');
const { Book } = require('../models');
const { Book: bookMock }  = require('./mock/models')

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /api/livros', () => {
    before(() => {
        sinon.stub(Book, 'findAll')
            .callsFake(bookMock.findAll);
    });

    after(() => {
        Book.findAll.restore();
    });

    describe('Consulta a lista de livros', () => {
        let response;

        before(async () => {
            response = await chai
                .request(server)
                .get('/api/livros');
        });

        it('Essa requisição deve retornar código de status 200', () => {
            expect(response).to.have.status(200);
        });

        it('A requisição GET para a rota traz uma lista inicial contendo dois registros de livros', () => {
            expect(response.body).to.have.length(2);
        });
    });
});