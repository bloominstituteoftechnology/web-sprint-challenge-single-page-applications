import React, { useState, UseEffect } from "react";

const FormZa = () => {
  const defaultState = {
    size: "",
    sauce: "",
    toppings: "",
    glutenfree: "",
    instructions:
      "Well done? Extra Sauce? Let us know how to make your perfect pizza.",
  };
  const [formState, setFormState] = useState(defaultState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  //const inputChange = e => {}

  const submitData = (e) => {};
  return (
    <div className="formZaPage">
      <h2>Build Your Own Pizza</h2>
      <img
        className="pizzaImg"
        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="Pizza"
      />
      <div className="formZa">
        <h2>Build Your Own Pizza</h2>
        <form onSubmit={submitData} className="wholeForm">
          <hr />
          <label htmlFor="pizzaSize">
            Choice of Size <span className="formHelp">Required</span>
            <select id="pizzaSize" name="pizzaSize" onChange={handleChange}>
              <option value="small">Small (10in, 2-3ppl)</option>
              <option value="medium">Medium (12in, 3-4ppl)</option>
              <option value="large">Large (14in, 3-5ppl)</option>
              <option value="xtralarge">Xtra Large (18in, 4-7ppl)</option>
            </select>
          </label>
          <hr />
          <label htmlFor="sauce">
            Choice of Sauce <span className="formHelp">Required</span>
            <div className="sauces">
              <input
                type="radio"
                id="OriginalRed"
                name="sauce"
                value="OriginalRed"
                onChange={handleChange}
              />
              <label htmlFor="OriginalRed">Original Red</label>
              <input
                type="radio"
                id="GarlicRanch"
                name="sauce"
                value="GarlicRanch"
                onChange={handleChange}
              />
              <label htmlFor="GarlicRanch">Garlic Ranch</label>
              <input type="radio" id="BBQ" name="sauce" value="BBQ" />
              <label htmlFor="BBQ">BBQ Sauce</label>
              <input
                type="radio"
                id="Alfredo"
                name="sauce"
                value="Alfredo"
                onChange={handleChange}
              />
              <label htmlFor="Alfredo">Alfredo sauce</label>
            </div>
          </label>
          <hr />
          <label htmlFor="toppings">
            Toppings{" "}
            <span className="formHelp">Select up to six toppings maximum.</span>
            <div className="toppings">
              <label htmlFor="pepperoni">
                <input
                  type="checkbox"
                  id="pepperoni"
                  name="toppings"
                  value="pepperoni"
                  onChange={handleChange}
                />
                Pepperoni
              </label>
              <label htmlFor="sausage">
                <input
                  type="checkbox"
                  id="sausage"
                  name="toppings"
                  value="sausage"
                  onChange={handleChange}
                />
                Sausage
              </label>
              <label htmlFor="canadianbacon">
                <input
                  type="checkbox"
                  id="canadianbacon"
                  name="toppings"
                  value="canadianbacon"
                  onChange={handleChange}
                />
                Canadian Bacon
              </label>
              <label htmlFor="spicysausage">
                <input
                  type="checkbox"
                  id="spicysausage"
                  name="toppings"
                  value="spicysausage"
                  onChange={handleChange}
                />
                Spicy Italian Sausage
              </label>
              <label htmlFor="chicken">
                <input
                  type="checkbox"
                  id="chicken"
                  name="toppings"
                  value="chicken"
                  onChange={handleChange}
                />
                Grilled Chicken
              </label>
              <label htmlFor="onions">
                <input
                  type="checkbox"
                  id="onions"
                  name="toppings"
                  value="onions"
                  onChange={handleChange}
                />
                Onions
              </label>
              <label htmlFor="peppers">
                <input
                  type="checkbox"
                  id="peppers"
                  name="toppings"
                  value="peppers"
                  onChange={handleChange}
                />
                Green Pepper
              </label>
              <label htmlFor="tomato">
                <input
                  type="checkbox"
                  id="tomato"
                  name="toppings"
                  value="tomato"
                  onChange={handleChange}
                />
                Diced Tomatos
              </label>
              <label htmlFor="olives">
                <input
                  type="checkbox"
                  id="olives"
                  name="toppings"
                  value="olives"
                  onChange={handleChange}
                />
                Black Olives
              </label>
              <label htmlFor="garlic">
                <input
                  type="checkbox"
                  id="garlic"
                  name="toppings"
                  value="garlic"
                  onChange={handleChange}
                />
                Roasted Garlic Cloves
              </label>
              <label htmlFor="banpepper">
                <input
                  type="checkbox"
                  id="banpepper"
                  name="toppings"
                  value="banpepper"
                  onChange={handleChange}
                />
                Bananna Peppers
              </label>
              <label htmlFor="artichoke">
                <input
                  type="checkbox"
                  id="artichoke"
                  name="toppings"
                  value="artichoke"
                  onChange={handleChange}
                />
                Artichoke Hearts
              </label>
              <label htmlFor="motz">
                <input
                  type="checkbox"
                  id="motz"
                  name="toppings"
                  value="motz"
                  onChange={handleChange}
                />
                Mozzerella
              </label>
              <label htmlFor="basil">
                <input
                  type="checkbox"
                  id="basil"
                  name="toppings"
                  value="basil"
                  onChange={handleChange}
                />
                Basil & Olive Oil
              </label>
            </div>
          </label>
          <hr />
          <label htmlFor="glutenfree">
            Gluten Free?{" "}
            <span className="formHelp">Additional Fee will apply.</span>
            <input
              type="radio"
              onChange={handleChange}
              className="inputOption"
            />
            <label className="labelOption">Cauliflower Crust</label>
          </label>
          <hr />
          <label htmlFor="instructions">
            Special Instructions
            <textarea
              name="name"
              value={formState.name}
              onChange={handleChange}
              id="instructions"
            />
          </label>
          <button>Add to Order</button>
        </form>
      </div>
    </div>
  );
};

export default FormZa;
