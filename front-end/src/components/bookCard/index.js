import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import './style.css';
import Button from '../button';

function BookCard({ id, titulo, editora, anoPublicacao }) {
  const [editBook, setEditBook] = useState(null);

  const deleteBook = (idToDelete) => {
    api.delete(`/livros/${idToDelete}`)
      .then(() => {}).catch((err) => console.log(err));
  };

  return (
    <div className="container-card">
      <div className="card">
        <p>{ titulo }</p>
        <p>{ editora }</p>
        <p>{ anoPublicacao }</p>
        <p>{ id }</p>
      </div>
      <div className="button-container">
        <Button
          label="Editar"
          name="edit"
          id={ id }
          onClick={ () => console.log(id) }
        />
        <Button
          label="Deletar"
          name="delete"
          id={ id }
          onClick={ () => deleteBook(id) }
        />
      </div>
      { editBook && (
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      )}
    </div>
  );
}

export default BookCard;

BookCard.propTypes = {
  id: PropTypes.number,
  titulo: PropTypes.string,
  editora: PropTypes.string,
  anoPublicacao: PropTypes.number,
}.isRequired;
