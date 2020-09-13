import React, { useState } from "react";
import pizzaForm from "../img/pizza-form.jpg";

export default function Pizza() {
  //managing state for form inputs

  const [formState, setFormState] = useState({
    name: "",
    size: "",
    originalRed: false,
    garlicRanch: false,
    bbqSauce: false,
    spinachAlfredo: false,
    pepperoni: false,
    sausage: false,
    bacon: false,
    italian: false,
    optional: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
  };

  return (
    <div className="pizza-wrapper">
      <div className="pizza-wrapper-content">
        <h3>Build Your Own Pizza</h3>
        <img src={pizzaForm} alt="pizza" className="pizzaPic" />
        <h2>Build Your Own Pizza</h2>
        <form onSubmit={formSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </label>

          <label htmlFor="size">
            <div className="choice-wrapper">
              <h3>Choice of Size</h3>
              <p>Required.</p>
            </div>
            <select name="size" id="size">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>

          <label htmlFor="originalRed">
            <div className="choice-wrapper">
              <h3>Choice of Sauce</h3>
              <p>Required.</p>
            </div>
            <input type="radio" id="originalRed" name="originalRed" />
            Original Red
          </label>

          <label htmlFor="garlicRanch">
            <input type="radio" id="garlicRanch" name="garlicRanch" />
            Garlic Ranch
          </label>

          <label htmlFor="bbqSauce">
            <input type="radio" id="bbqSauce" name="bbqSauce" />
            BBQ Sauce
          </label>

          <label htmlFor="spinachAlfredo">
            <input type="radio" id="spinachAlfredo" name="spinachAlfredo" />
            Spinach Alfredo
          </label>

          <div className="choice-wrapper">
            <h3>Add Toppings</h3>
            <p>Choose up to 10.</p>
          </div>

          <label htmlFor="pepperoni">
            Pepperoni
            <input type="checkbox" id="pepperoni" name="pepperoni" />
          </label>

          <label htmlFor="sausage">
            Sausage
            <input type="checkbox" id="sausage" name="sausage" />
          </label>

          <label htmlFor="bacon">
            Canadian Bacon
            <input type="checkbox" id="bacon" name="bacon" />
          </label>

          <label htmlFor="italian">
            Spicy Italian Sausage
            <input type="checkbox" id="italian" name="italian" />
          </label>

          <label>
            <div className="choice-wrapper">
              <h3>Special Instructions</h3>
            </div>
            <input
              type="textarea"
              id="optional"
              name="optional"
              placeholder="Anything else you'd like to add?"
            />
          </label>

          <button type="submit" className="submit-button">
            Add to order
          </button>
        </form>
      </div>
    </div>
  );
}
