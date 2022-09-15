import React, { useState } from 'react';
import api from '../../api';
import Header from '../../components/header';
import Button from '../../components/button';
import Input from '../../components/input';
import CardBook from '../../components/bookCard';

function Pesquisa() {
  const [idToSearch, setidToSearch] = useState(null);
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setidToSearch(value);
  };

  const searchBook = () => {
    api.get(`/livros/${idToSearch}`)
      .then((apiResponse) => {
        setBook(apiResponse.data);
      }).catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      <Header />
      <main>
        <h1>Pesquisar Livro</h1>
        <section>
          <div>
            <Input
              type="text"
              value={ idToSearch }
              name="id"
              onChange={ handleChange }
            />
            <Button
              label="Pesquisar"
              name="search"
              id="search-button"
              onClick={ () => searchBook() }
            />
          </div>
        </section>
        <section>
          { book && (
            <CardBook
              id={ book.id }
              titulo={ book.titulo }
              editora={ book.editora }
              anoPublicacao={ book.anoPublicacao }
            />
          )}
          { error && (<p>Livro não Encontrato!</p>)}
        </section>
      </main>
    </>
  );
}

export default Pesquisa;
