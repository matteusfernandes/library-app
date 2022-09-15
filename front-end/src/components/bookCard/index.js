import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function BookCard({ id, titulo, editora, anoPublicacao }) {
  return (
    <div className="container-card">
      <div>
        <p>{ titulo }</p>
      </div>
      <div>
        <p>{ editora }</p>
      </div>
      <div>
        <p>{ anoPublicacao }</p>
      </div>
      <div>
        <p>{ id }</p>
      </div>
      <div></div>
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
