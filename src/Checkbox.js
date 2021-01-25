import './App.css';
import React from 'react';





export default function Checkbox(props) {
  const { formValues, topping, inputChange, name } = props

  return (

    <label>
    { name }
    <input
      name={topping}
      type="checkbox"
      checked={formValues.topping} // The expression `formState.props` evaluates to either true or false.
      onChange={inputChange}
    />
    </label>

  )
}

