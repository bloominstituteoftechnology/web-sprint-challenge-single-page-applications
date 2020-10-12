import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

// seeting up form schema for before valid
const formSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  size: yup.string().required('Please select pizza size'),
  pepperoni: yup.string().defined(),
  sausage: yup.string().defined(),
  ham: yup.string().defined(),
  olives: yup.string().defined(),
  bellpepper: yup.string().defined(),
  pineapple: yup.string().defined(),
  anchovies: yup.string().defined(),
  specInstructions: yup.string().notRequired(),
});

// form initalization with default ''
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

  const [serverError, setServerError] = useState('');
  const [post, setPost] = useState('');
  const [formState, setFormState] = useState(defaultFormValue);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: '',
    size: '',
    pepperoni: '',
    sausage: '',
    ham: '',
    olives: '',
    bellpepper: '',
    pineapple: '',
    anchovies: '',
    specInstructions: '',
  });

  // Change is validated for required
  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.name)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: '',
        });
      })
      .catch((errors) => {
        setErrors({
          ...errors,
          [event.target.name]: errors.errors[0],
        });
      });
  };

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log('valid?', valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
    axios
      .post('https://reqres.in/api/users', formState)
      .then((response) => {
        setPost(response.data);
        console.log('Success', post);
        console.log(response.data.size);
        setFormState({
          name: '',
          size: '',
          pepperoni: '',
          sausage: '',
          ham: '',
          olives: '',
          bellpepper: '',
          pineapple: '',
          anchovies: '',
          specInstructions: '',
        });
        serverError(null);
      })
      .catch((error) => {
        setServerError('404 error');
      });
  };

  const inputChange = (event) => {
    event.persist();

    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    };

    validateChange(event);
    setFormState(newFormData);
    console.log(event.target.name.howmany);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert('Thank you for your order. Your pizza is on its way');
      }}
    >
      <label htmlFor='name'>
        {' '}
        Your Name:
        <input
          type='text'
          name='name'
          id='nameinput'
          placeholder='Your Name'
          value={formState.name}
          onChange={inputChange}
        />
        {errors.name.length > 2 ? <p className='error'>{errors.name}</p> : null}
        <br />
      </label>
      <br />

      <label htmlFor='size'>
        Select Pizza Size:
        <select name='size' id='size' onChange={inputChange}>
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
          <option name='Xl' value='extraLarge'>
            Extra Large
          </option>
        </select>
      </label>

      <div className='toppingChecklist'>
        <p>Choose Your Topping(s)</p>

        <label htmlFor='pepperoni'>
          <input
            type='checkbox'
            name='pepperoni'
            id='pepperoniSelect'
            checked={formState.pepperoni}
            onChange={inputChange}
          />
          Pepperoni
        </label>
        <br />

        <label htmlFor='sausage'>
          <input
            type='checkbox'
            name='sausage'
            id='sausageSelect'
            checked={formState.sausage}
            onChange={inputChange}
          />
          Sausage
        </label>
        <br />

        <label htmlFor='ham'>
          <input
            type='checkbox'
            name='ham'
            id='hamSelect'
            checked={formState.ham}
            onChange={inputChange}
          />
          Ham
        </label>
        <br />

        <label htmlFor='olives'>
          <input
            type='checkbox'
            name='olives'
            id='olivesSelect'
            checked={formState.olives}
            onChange={inputChange}
          />
          Olives
        </label>
        <br />

        <label htmlFor='bellpepper'>
          <input
            type='checkbox'
            name='bellpepper'
            id='bellpepperSelect'
            checked={formState.bellpepper}
            onChange={inputChange}
          />
          Bell Pepper
        </label>
        <br />

        <label htmlFor='pineapple'>
          <input
            type='checkbox'
            name='pineapple'
            id='pineappleSelect'
            checked={formState.pineapple}
            onChange={inputChange}
          />
          Pineapple
        </label>
        <br />

        <label htmlFor='anchovies'>
          <input
            type='checkbox'
            name='anchovies'
            id='anchoviesSelect'
            checked={formState.anchovies}
            onChange={inputChange}
          />
          Anchovies
        </label>
        <br />
      </div>
      <br />

      <label htmlFor='Special Instructions'>
        Special Instructions
        <br />
        <textarea
          name='specInstructions'
          id='specInstructionsData'
          placeholder='Extra cheese, toppings, etc.'
          value={formState.specInstructions}
          onChange={inputChange}
        />
      </label>
      <br />
      <button name='placeOrder' onSubmit={post} disabled={isButtonDisabled}>
        Place Order
      </button>
    </form>
  );
}
