import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';


function Pizza(props) {
  const {
    values,
    submit,
    inputChange,
    checkbox,
    validinputChange,
    disabled,
    errors
  } = props;

  const history = useHistory();

 const onInputChange = (evt) => {
    const { name, value, size } = evt.target;
    validinputChange(name, value, size);
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkbox(name, checked);
  };

  const onSubmit = (evt) => {
    console.log("hello");
    evt.preventDefault();
    submit();
  
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/pizza">Pizza</Link>

      <form onSubmit={onSubmit}>
        <div>
          <h2>Build your pizza!</h2>
          <div>
          <h4>General information</h4>

          <label>
            Name
            <input
              placeholder="Please enter your name."
              value={values.name}
              name="name"
              type="text"
              data-cy="name"
              onChange={onInputChange}
              id="nameInput"
            />
          </label>
          <div>{errors.name}</div>
        </div>
        <br></br>
  
          <label>
            What size you you want?
            <select name="size" onChange={onInputChange} id="sizeInput" data-cy="size">
              <option> Small </option>
              <option> Medium </option>
              <option> Large </option>
              <option> XL </option>
            </select>
          </label>
          <br></br>
         
        </div>

        <div>
          <h4>Toppings</h4>
       
          <label>
            Cheese
            <input
              type="checkbox"
              name="cheese"
              id="cheeseInput"
              data-cy="cheese"
              checked={values.toppings.cheese === true}
              onChange={onCheckboxChange}
            />
          </label>

          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              id="pepperoniInput"
              data-cy="pepperoni"
              checked={values.toppings.pepperoni === true}
              onChange={onCheckboxChange}
            />
          </label>

          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              id="sausageInput"
              data-cy="sausage"
              checked={values.toppings.sausage === true}
              onChange={onCheckboxChange}
            />
          </label>
         
         <label>
            Olives
            <input
              type="checkbox"
              name="olives"
              id="olivesInput"
              data-cy="olives"
              checked={values.toppings.olives === true}
              onChange={onCheckboxChange}
            />
          </label>
       
          <br></br>
          <div>
          <br></br>
          <label htmlFor="special">
        Any special instructions?
        <br></br>
        <textarea
          name="special"
          id="special"
          placeholder="Special instrutions here"
          value={values.special}
          data-cy="special"
          onChange={inputChange}
        />
        </label>
          </div>
          <button data-cy="submit"  className="smtBtn" disabled={disabled}>
            Order Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Pizza;