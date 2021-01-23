import './App.css';
import React, { useState } from 'react';
// import * as yup from 'yup';




export default function Checkbox(props) {
  const { formValues, topping, inputChange } = props

  return (

    <label>
    { topping }
    <input
      name={topping}
      type="checkbox"
      checked={formValues.topping} // The expression `formState.props` evaluates to either true or false.
      onChange={inputChange}
    />
    </label>

  )
}

