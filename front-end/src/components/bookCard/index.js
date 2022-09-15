import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import './style.css';
import Button from '../button';
import Input from '../input';

function BookCard({ id, titulo, editora, anoPublicacao }) {
  const [editBook, setEditBook] = useState(null);

  const deleteBook = (idToDelete) => {
    api.delete(`/livros/${idToDelete}`)
      .then(() => {}).catch((err) => console.log(err));
  };

  const bookToEdit = (idToSearch) => {
    api.get(`/livros/${idToSearch}`)
      .then((apiResponse) => {
        setEditBook(apiResponse.data);
      }).catch((err) => console.log(err));
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
          onClick={ () => bookToEdit(id) }
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
          <div>
            <Input
              type="text"
              value={ editBook.titulo }
              name="Titulo"
              onChange=""
            />
            <Input
              type="text"
              value={ editBook.editora }
              name="Titulo"
              onChange=""
            />
            <Input
              type="text"
              value={ editBook.anoPublicacao }
              name="Titulo"
              onChange=""
            />
          </div>
          <div>
            <Button
              type="button"
              label="Confirmar"
              name="finish-edit"
              id="finish-edit"
              onClick=""
            />
          </div>
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
