import React from "react";
import pizzaForm from "../img/pizza-form.jpg";

export default function Pizza() {
  return (
    <div className="pizza-wrapper">
      <div className="pizza-wrapper-content">
        <h3>Build Your Own Pizza</h3>
        <img src={pizzaForm} alt="pizza" className="pizzaPic" />
        <h2>Build Your Own Pizza</h2>

        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </label>

        <div className="choice-wrapper">
          <h3>Choice of Size</h3>
          <p>Required.</p>
        </div>

        <select name="choice">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <div className="choice-wrapper">
          <h3>Choice of Sauce</h3>
          <p>Required.</p>
        </div>

        <label htmlFor="originalRed">
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

        <div className="choice-wrapper">
          <h3>Choice of Substitute</h3>
          <p>Choose up to 1.</p>
        </div>

        <div className="choice-wrapper">
          <h3>Special Instructions</h3>
        </div>

        <input
          type="textarea"
          id="textArea"
          name="textArea"
          placeholder="Anything else you'd like to add?"
        />

        <button type="submit" className="submit-button">
          Add to order
        </button>
      </div>
    </div>
  );
}
