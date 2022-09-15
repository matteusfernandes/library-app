import React from 'react';
import PropTypes from 'prop-types';

function BookCard({ id, titulo, editora, anoPublicacao }) {
  return (
    <div>
      <div>
        <p>{ id }</p>
        <p>{ titulo }</p>
        <p>{ editora }</p>
        <p>{ anoPublicacao }</p>
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
