import React, { useEffect, useState } from 'react';
import api from '../../api';
import './style.css';
import Header from '../../components/header';
import CardBook from '../../components/bookCard';

function Livros() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    api.get('/livros')
      .then((apiResponse) => {
        setBooks((apiResponse.data));
      }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Livros Encontrados</h1>
        <section className="container">
          { books && books.map((book) => (
            <CardBook
              key={ book.id }
              id={ book.id }
              titulo={ book.titulo }
              editora={ book.editora }
              anoPublicacao={ book.anoPublicacao }
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Livros;
