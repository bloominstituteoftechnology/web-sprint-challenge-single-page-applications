import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

export default function Form() {
  const defaultFormValue = {
    name: '',
    size: '',
    pepperoni: '',
    sausage: '',
    ham: '',
    olives: '',
    bellpepper: '',
    pineapple: '',
    anchovies: '',
    SpecialInstruction: '',
  };

  const [formState, setFormState] = useState(defaultFormValue);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor='name'>
        {''}
        Your Name:
        <input
          type='text'
          name='name'
          id='nameinput'
          placeholder='Your Name'
          value={formState.name}
          // onChange={}
        />
      </label>
      <br />

      <label htmlFor='size'>
        Select Pizza Size:
        <select name='size' id='size'>
          <option name='default' value={null}></option>
          <option name='Sm' value='small'>
            Small
          </option>
          <option name='Med' value='medium'>
            Medium
          </option>
          <option name='Lg' value='large'>
            Large
          </option>
          <option name='Xl' value='extralarge'>
            Extra Large
          </option>
        </select>
      </label>
    </form>
  );
}
