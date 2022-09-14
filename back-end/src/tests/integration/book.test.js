const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../api/app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes de Integração da API na rota GET /livros', async () => {
    
    it('Essa requisição retorna todos os livros cadastrados', async () => {
        let response = await chai.request(server)
            .get('/livros');
        expect(response).to.have.status(200);
        expect(response.body).to.have.length(2);
    });
});

describe('Testes de Integração da API na rota GET /livros/:id', async () => {
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

describe('Testes de Integração da API na rota POST /livros', async () => {
    const newBook = {
        "titulo": "O Chamado de Cthulhu",
        "editora": "Darkside",
        "anoPublicacao": 2021
    };

    it('Essa requisição retorna o novo livro cadastrado', async () => {
        let response = await chai.request(server)
            .post('/livros').send(newBook);
        expect(response).to.have.status(201);
        expect(response.body).to.include(newBook);
    });
});

describe('Testes de Integração da API na rota PUT /livros/:id', async () => {
    const bookToUpdate = {
        "titulo": "O Chamado de Cthulhu",
        "editora": "Darkside",
        "anoPublicacao": 2019
    };

    it('Atualiza um livro existente com sucesso', async () => {
        let response = await chai.request(server)
            .put('/livros/3').send(bookToUpdate);
        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal([1]);
    });

    it('Se o livro não existe, retorna false', async () => {
        let response = await chai.request(server)
            .put('/livros/4').send({ "anoPublicacao": 2019 });
        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal([0]);
    });
});

describe('Testes de Integração da API na rota DELETE /livros/:id', async () => {
    it('Deleta um livro existente com sucesso', async () => {
        let response = await chai.request(server)
            .delete('/livros/1');
        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal(1);
    });

    it('Se o livro não existe, gera um erro', async () => {
        let response = await chai.request(server)
            .delete('/livros/1000');
        expect(response).to.have.status(200);
        expect(response.body).to.deep.equal(0);
    });
});
