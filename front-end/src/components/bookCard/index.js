import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Button from '../button';

function BookCard({ id, titulo, editora, anoPublicacao }) {
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
          onClick=""
        />
        <Button
          label="Deletar"
          name="delete"
          id={ id }
          onClick=""
        />
      </div>
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
