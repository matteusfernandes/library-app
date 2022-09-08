const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../../api/app');
const { book } = require('../../database/models');
const { Book: bookMock }  = require('../mock/models')

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /livros', () => {
    before(() => {
        sinon.stub(book, 'findAll')
            .callsFake(bookMock.findAll);
    });

    after(() => {
        book.findAll.restore();
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