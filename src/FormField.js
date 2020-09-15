import React from "react";

function FormField({ name, label, ...rest }) {
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <input  id={name} name={name} {...rest} />
    </div>
  );
}

export default FormField;