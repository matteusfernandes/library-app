import React, { useState } from 'react';
import api from '../../api';
import Header from '../../components/header';
import Button from '../../components/button';
import Input from '../../components/input';

function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [editora, setEditora] = useState('');
  const [anoPublicacao, setAnoPublicacao] = useState('');
  const [sucessPost, setSucessPost] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'Titulo') return setTitulo(value);
    if (name === 'Editora') return setEditora(value);
    setAnoPublicacao(value);
  };

  const handleClick = () => {
    const data = {
      titulo,
      editora,
      anoPublicacao,
    };

    api.post('/livros', data)
      .then(() => {
        setSucessPost(true);
        setTitulo('');
        setEditora('');
        setAnoPublicacao('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <main>
        <h1>Cadastrar Novo Livro</h1>
        <section>
          <div>
            <div>Título</div>
            <Input
              type="text"
              value={ titulo }
              name="Titulo"
              onChange={ handleChange }
            />
            <div>Editora</div>
            <Input
              type="text"
              value={ editora }
              name="Editora"
              onChange={ handleChange }
            />
            <div>Ano de Publicação</div>
            <Input
              type="text"
              value={ anoPublicacao }
              name="anoPublicacao"
              onChange={ handleChange }
            />
            <Button
              label="Cadastrar"
              name="post"
              id="post-button"
              onClick={ () => handleClick() }
            />
          </div>
        </section>
        <section>
          { sucessPost && <p>Livro Cadastrado com Sucesso!!!</p> }
        </section>
      </main>
    </>
  );
}

export default Cadastro;
