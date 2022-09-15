import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, value, name, onChange }) {
  return (
    <div>
      <label htmlFor={ name } className="label">
        <input
          type={ type }
          value={ value }
          name={ name }
          onChange={ onChange }
          required
          id={ name }
        />
      </label>
    </div>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
