const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../api/app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de Integração da API na rota /livros', async () => {
    
    it('Essa requisição retorna todos os livros cadastrados', async () => {
        let response = await chai.request(server)
            .get('/livros');
        expect(response).to.have.status(200);
        expect(response.body).to.have.length(2);
    });
});

describe('Testes de Integração da API na rota /livros/:id', async () => {
    const expectBook = {
        "id": 1,
        "titulo": "Harry Potter e a Pedra Filosofal",
        "editora": "Bloomsbury Publishing",
        "anoPublicacao": 1997
    };

    it('Essa requisição retorna o livro cadastrado', async () => {
        let response = await chai.request(server)
            .get('/livros/1');
        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal(expectBook);
    });
});