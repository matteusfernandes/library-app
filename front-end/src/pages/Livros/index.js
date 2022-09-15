import React, { useEffect, useState } from 'react';
import api from '../../api';
import Header from '../../components/header';

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
      {console.log(books)}
      <Header />
      <main>
        <h1>Livros Encontrados</h1>
      </main>
    </>
  );
}

export default Livros;
