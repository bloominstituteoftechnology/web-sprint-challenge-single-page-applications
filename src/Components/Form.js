import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

// seeting up form schema for before valid
const formSchema = yup.object().shape({
  name: yup.string().required('Please enter your Name!'),
  size: yup
    .string()
    .required('Please select pizza size')
    .oneOf(['small', 'medium', 'large', 'extraLarge']),
  pepperoni: yup.string().defined(),
  sausage: yup.string().defined(),
  ham: yup.string().defined(),
  olives: yup.string().defined(),
  bellpepper: yup.string().defined(),
  pineapple: yup.string().defined(),
  anchovies: yup.string().defined(),
  specInstructions: yup.string().notRequired(),
});

// form initialization the state with object key and value
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
    specInstructions: '',
  };

  const [serverError, setServerError] = useState('');
  // Used to display response from API
  const [post, setPost] = useState('');
  const [formState, setFormState] = useState(defaultFormValue);
  // initializaion of button for control
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // Managing state  for errors
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
      .validate(
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
      )
      .then((valid) => {
        //  the input is passing
        // the reset of that input's error
        setErrors({ ...errors, [event.target.name]: '' });
      })
      .catch((err) => {
        //  the input is breaking formSchema
        console.log('err', err);
        setErrors({ ...errors, [event.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    // my is valid is comparing the values at the keys in formState to the rules at the keys inside of formSchema,(the keys are the same for each which is (name.actualname))
    // formSchema.isValid(formState) returns a promise we can to check wheater or not the process is completed
    // Promises inject their values in to the parameter of the .then function
    // when console.log("is valid", valid); we can see validation is being performed on everything and once true-> button is enabled if not stays disabled
    formSchema.isValid(formState).then((valid) => {
      console.log('valid?', valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your order. Your pizza is on its way');
    console.log('form submitted');
    axios
      .post('https://reqres.in/api/users', formState)
      .then((response) => {
        console.log(response);
        setPost(response.data);
        console.log('Success', post);
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
  // used when a change occurs on the input the (event) fires and gets us e.target.name which is the name of the input that fired the event
  // e.target.value which is the current value of the input that fired the input
  const inputChange = (event) => {
    event.persist();
    //  creating a clone of formState and setting it to newFormData and passing the object in to setFormState
    const newFormData = {
      // using object distructuring ,spread operator to creat a clone of formState
      ...formState,
      [event.target.name]:
        // if type equals checkbox then we want to use e.target.checked insted of e.target.vlaue
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    };
    // on event validateChange is passed the event and checks to see if schema is broken or not
    validateChange(event);
    // update the formState with new FormState after performing validateChange
    setFormState(newFormData);
    // console.log(event.target.name);
  };

  return (
    <form
      // onSubmit={(event) => {
      //   event.preventDefault();
      //   alert('Thank you for your order. Your pizza is on its way');
      // }}
      onSubmit={formSubmit}
    >
      <label htmlFor='name'>
        {' '}
        Your Name:
        <input
          // minlength='2'
          type='text'
          name='name'
          data-cy='name'
          id='nameinput'
          placeholder='Your Name'
          // init value to and from formState using formState.key of the object
          value={formState.name}
          // added to pass change to our inputChange function
          onChange={inputChange}
        />
        {errors.name.length > 2 ? <p className='error'>{errors.name}</p> : null}
        <br />
      </label>
      <br />

      <label htmlFor='size'>
        Select Pizza Size:
        <select
          name='size'
          id='size'
          data-cy='size'
          value={formState.size}
          onChange={inputChange}
        >
          {/* value not used just a place holder */}
          <option disabled selected value=''>
            Choose Size
          </option>
          <option name='small' value='small'>
            Small
          </option>
          <option name='medium' value='medium'>
            Medium
          </option>
          <option name='large' value='large'>
            Large
          </option>
          <option name='extraLarge' value='extraLarge'>
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
            data-cy='pepperoni'
            id='pepperoniSelect'
            // using the checked property insted of value for check boxes so they return the expected bollean
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
            data-cy='sausage'
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
            data-cy='ham'
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
            data-cy='olives'
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
            data-cy='bellpepper'
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
            data-cy='pineapple'
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
            data-cy='anchovies'
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
          data-cy='specInstructions'
          placeholder='Extra cheese, toppings, etc.'
          value={formState.specInstructions}
          onChange={inputChange}
        />
      </label>
      <br />
      {/*disable or enable the btn conditionaly by passing our state   */}
      <button
        name='placeOrder'
        data-cy='submit'
        onSubmit={post}
        disabled={isButtonDisabled}
      >
        Place Order
      </button>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>
  );
}
