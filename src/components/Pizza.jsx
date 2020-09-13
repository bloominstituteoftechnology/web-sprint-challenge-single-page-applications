import React from "react";
import pizzaForm from "../img/pizza-form.jpg";

export default function Pizza() {
  return (
    <div className="pizza-wrapper">
      <h3>Build Your Own Pizza</h3>
      <img src={pizzaForm} alt="pizza" className="pizzaPic" />
      <h2>Build Your Own Pizza</h2>

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

      <label htmlFor="chicken">
        Grilled Chicken
        <input type="checkbox" id="chicken" name="chicken" />
      </label>

      <label htmlFor="onions">
        Onions
        <input type="checkbox" id="onions" name="onions" />
      </label>

      <label htmlFor="pepper">
        Green Pepper
        <input type="checkbox" id="pepper" name="pepper" />
      </label>

      <label htmlFor="tomatoes">
        Diced Tomatoes
        <input type="checkbox" id="tomatoes" name="tomatoes" />
      </label>

      <label htmlFor="olives">
        Black Olives
        <input type="checkbox" id="olives" name="olives" />
      </label>

      <label htmlFor="garlic">
        Roasted Garlice
        <input type="checkbox" id="garlic" name="garlic" />
      </label>

      <label htmlFor="hearts">
        Artichoke Hearts
        <input type="checkbox" id="hearts" name="hearts" />
      </label>

      <label htmlFor="three">
        Three Cheese
        <input type="checkbox" id="three" name="three" />
      </label>

      <label htmlFor="pineapple">
        Pineapple
        <input type="checkbox" id="pineapple" name="pineapple" />
      </label>

      <label htmlFor="extra">
        Extra Cheese
        <input type="checkbox" id="extra" name="extra" />
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
    </div>
  );
}
