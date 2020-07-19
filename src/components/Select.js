import React from 'react';

export default function Select(props) {
  const errorMessage = props.errors[props.name];
  return (
    <label htmlFor="name">
      {props.label}
      <select {...props} />
      {errorMessage.length !== 0 && <p id='select-error' className="error">{errorMessage}</p>}
    </label>
  );
}