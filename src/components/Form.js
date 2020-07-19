import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from 'axios';
import Input from './Input';
import Select from './Select';

export default function Form(props) {
  // managing state for our form inputs
  const defaultState = {
    name: "",
    size: "",
    toppings: {
      pepperoni: false,
      sausage: false,
      mushroom: false,
      extraCheese: false
    },
    specialInstructions: ""
  };

  const defaultErrors = {
    name: "",
    size: ""
  };

  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultErrors);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .min(2, 'Name must be at least 2 characters long.')
        .required('Name is a required field.'),
    size: yup.string().required('Select a size.'),
    specialInstructions: yup.string()
  });

  const postNewOrder = newOrder => {
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        props.setOrders([...props.orders, res.data]);
        console.log(`form submit success! "${res.data.name}" has been added!`);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormState(defaultState);
      });
  };

  // validate whether value meets schema
  const validateChange = e => {
    e.persist();
    // reach allows us to check a specific value of the schema
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      })
      .catch(error => {
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0]
        })
      })
  };

  // onChange function
  const inputChange = e => {
    // ternary operator to determine the form value
    // console.log(e.target.type);
    const value = 
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    validateChange(e);
  };

  const onCheckboxChange = event => {
    const {name} = event.target
    const {checked} = event.target

    setFormState({
      ...formState,
      toppings: {
        ...formState.toppings,
        [name]: checked,
      }
    })
  };

  const formSubmit = event => {
    event.preventDefault();
    const newOrder = {
      name: formState.name.trim(),
      size: formState.size,
      toppings: Object.keys(formState.toppings).filter(toppings => formState.toppings[toppings] === true),
      specialInstructions: formState.specialInstructions.trim()
    };

    postNewOrder(newOrder);
    console.log(newOrder);
  };

  useEffect(() => {
    formSchema.isValid(formState)
    .then(valid => {
      setButtonDisabled(!valid)
    })
  }, [formState]);

  return (
    <div className='form-container'>
      <form onSubmit={formSubmit}>
        <div className='pizza-page-header'>
          <p>Order Form</p>
        </div>
        <Input
          className="name-input"
          data-cy="name"
          type="text"
          name="name"
          onChange={inputChange}
          value={formState.name}
          placeholder="Name"
          errors={errors}
        />
        <div className="pizza-size">
          <label htmlFor="size">
            <p>Size:</p>
            <Select data-cy="select-size" className="select-size" name="size" value={formState.size} onChange={inputChange} errors={errors}>
              <option value="">--select a size--</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </Select>
          </label>
        </div>
        <div className="pizza-toppings">
          <p>Toppings (optional):</p>
          <div className="toppings-options">
            <label>
              <input
                data-cy="pepperoni"
                type="checkbox"
                name="pepperoni"
                checked={formState.toppings.pepperoni}
                onChange={onCheckboxChange}
                value={formState.toppings}
                errors={errors}
              />
              Pepperoni
            </label>
            <label>
              <input
                data-cy="sausage"
                type="checkbox"
                checked={formState.toppings.sausage}
                name="sausage"
                onChange={onCheckboxChange}
                value={formState.toppings}
                errors={errors}
              />
              Sausage
            </label>
            <label>
              <input
                data-cy="mushroom"
                type="checkbox"
                checked={formState.toppings.mushroom}
                name="mushroom"
                onChange={onCheckboxChange}
                value={formState.toppings}
                errors={errors}
              />
              Mushroom
            </label>
            <label>
              <input
                data-cy="extraCheese"
                type="checkbox"
                checked={formState.toppings.extraCheese}
                name="extraCheese"
                onChange={onCheckboxChange}
                value={formState.toppings}
                errors={errors}
              />
              Extra Cheese
            </label>
          </div>
        </div>
        <div className="special-instructions">
          <label>
            <input
              data-cy="specialInstructions"
              type="text"
              name="specialInstructions"
              onChange={inputChange}
              value={formState.specialInstructions}
              errors={errors}
              placeholder='Special Instructions?'
            />
          </label>
        </div>
        <button id="order-button" disabled={buttonDisabled}>Place Order</button>
        <div className='underline'></div>
      </form>
    </div>
  );
}
