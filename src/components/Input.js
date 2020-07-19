import React from 'react';

export default function Input(props) {
  const errorMessage = props.errors[props.name];
  return (
    <label htmlFor="name">
      {props.label}
      <input {...props} />
      {errorMessage.length !== 0 && <p id='input-error' className="error">{errorMessage}</p>}
    </label>
  );
}