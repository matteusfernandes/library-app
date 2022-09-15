import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import './style.css';
import Button from '../button';
import Input from '../input';

function BookCard({ id, titulo, editora, anoPublicacao }) {
  const [editBook, setEditBook] = useState(false);
  const [idToEdit, setIdToEdit] = useState(null);
  const [newTitulo, setNewTitulo] = useState('');
  const [newEditora, setNewEditora] = useState('');
  const [newAnoPublicacao, setNewAnoPublicacao] = useState('');

  const deleteBook = (idToDelete) => {
    api.delete(`/livros/${idToDelete}`)
      .then(() => {}).catch((err) => console.log(err));
  };

  const bookToEdit = (idToSearch) => {
    api.get(`/livros/${idToSearch}`)
      .then((apiResponse) => {
        setEditBook(true);
        setIdToEdit(apiResponse.data.id);
        setNewTitulo(apiResponse.data.titulo);
        setNewEditora(apiResponse.data.editora);
        setNewAnoPublicacao(apiResponse.data.anoPublicacao);
      }).catch((err) => console.log(err));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'Titulo') return setNewTitulo(value);
    if (name === 'Editora') return setNewEditora(value);
    setNewAnoPublicacao(value);
  };

  const handleClick = () => {
    const data = {
      titulo: newTitulo,
      editora: newEditora,
      anoPublicacao: newAnoPublicacao,
    };

    api.put(`/livros/${idToEdit}`, data)
      .then(() => {
        setEditBook(false);
      })
      .catch((err) => console.log(err));
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
        <div className="div_teste">
          <div>
            <Input
              type="text"
              value={ newTitulo }
              name="Titulo"
              onChange={ handleChange }
            />
            <Input
              type="text"
              value={ newEditora }
              name="Editora"
              onChange={ handleChange }
            />
            <Input
              type="text"
              value={ newAnoPublicacao }
              name="Ano"
              onChange={ handleChange }
            />
          </div>
          <div>
            <Button
              type="button"
              label="Confirmar"
              name="finish-edit"
              id="finish-edit"
              onClick={ () => handleClick() }
            />
            <Button
              type="button"
              label="Fechar"
              name="close-edit"
              id="close-edit"
              onClick={ () => setEditBook(false) }
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
