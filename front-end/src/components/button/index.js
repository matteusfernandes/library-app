import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, name, id, onClick }) {
  return (
    <button
      type="button"
      name={ name }
      id={ id }
      onClick={ onClick }
    >
      { label }
    </button>
  );
}

export default Button;

Button.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
