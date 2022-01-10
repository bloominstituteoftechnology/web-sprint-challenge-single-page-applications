import React, { useState } from "react";
import "./form.css";
import pic from "./images/pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
export default Form;

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [inputVal, setInputVal] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setInputVal(e.target.value);
  }

  return (
    <div class="menu">
      <nav>
        <button>
          <a href="/Formmenu/Formmenu.js">Home</a>
        </button>
        <button>
          <a href="/">Order</a>
        </button>
      </nav>
      <br />
      <div className="body-began"></div>
      <form className="form-styles">
      
        <form >
          <div className="h1-styles">
              <h1>Build a Pizza</h1>
          </div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={inputVal}
            onChange={handleChange}
          />
        </form>
        <div>
          <p>Required</p>
          <label htmlFor="size">Choice of Size</label>
          <option value="">-Select-</option>
          <select name="size" onChange={() => {}}>
            <option value="Large">Large</option>
            <option value="Extra-Large">Extra Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </div>
        <div>
          <h2>Choice of Sauce</h2>
          <p>Required</p>
          <input
            type="radio"
            id="pizza-form"
            name="sauce"
            value="Original Red"
          />
          <label for="pizza-form">Original Red</label>
          <br />
          <input type="radio" id="Garlic" name="sauce" value="Garlic Ranch" />
          <label for="Garlic Ranch">Garlic Ranch</label>
          <br />
          <input type="radio" id="order-pizza" name="sauce" value="BBQ Sauce" />
          <label for="BBQ Sauce">BBQ Sauce</label>
          <br />
          <input
            type="radio"
            id="Spinach Alfredo"
            name="sauce"
            value="Spinach Alfredo"
          />
          <label for="Spinach Alfredo">Spinach Alfredo</label>
        </div>
        <div>
          <h2>Add Toppings</h2>
          <p>Choose up to 10</p>
          <input
            type="checkbox"
            id="Pepperoni"
            name="Pepperoni"
            value="Pepperoni"
          />
          <label for="Pepperoni">Pepperoni</label>
          <br />
          <input type="checkbox" id="Sausage" name="Sausage" value="Sausage" />
          <label for="Sausage">Sausage</label>
          <br />
          <input
            type="checkbox"
            id="Canadon Bacon"
            name="Canadon Bacon"
            value="Canadon Bacon"
          />
          <label for="Canadon Bacon">Canadon Bacon</label>
          <br />

          <input
            type="checkbox"
            id="Spicy Italian Sausage"
            name="Spicy Italian Sausage"
            value="Spicy Italian Sausage"
          />
          <label for="Spicy Italian Sausage">Spicy Italian Sausage</label>
          <br />
          <input
            type="checkbox"
            id="Grilled Chicker"
            name="Grilled Chicker"
            value="Grilled Chicker"
          />
          <label for="Grilled Chicker">Grilled Chicker</label>
          <br />
          <input type="checkbox" id="Onions" name="Onions" value="Onions" />
          <label for="Onions">Onions</label>
          <br />
          <input
            type="checkbox"
            id="Green Pepper"
            name="Green Pepper"
            value="Green Pepper"
          />
          <label for="Green Pepper">Green Pepper</label>
          <br />

          <input
            type="checkbox"
            id="Diced Tomatoes"
            name="Diced Tomatoes"
            value="Diced Tomatoes"
          />
          <label for="Diced Tomatoes">Diced Tomatoes</label>
          <br />
          <input
            type="checkbox"
            id="Black Olives"
            name="Black Olives"
            value="Black Olives"
          />
          <label for="Black Olives">Black Olives</label>
          <br />
          <input
            type="checkbox"
            id="Roasted Garlic"
            name="Roasted Garlic"
            value="Roasted Garlic"
          />
          <label for="Roasted Garlic">Roasted Garlic</label>
          <br />
          <input
            type="checkbox"
            id="Artichoke Hearts"
            name="Artichoke Hearts"
            value="Artichoke Hearts"
          />
          <label for="Artichoke Hearts">Artichoke Hearts</label>
          <br />
          <input
            type="checkbox"
            id="Three Cheese"
            name="Three Cheese"
            value="Three Cheese"
          />
          <label for="Three Cheese">Three Cheese</label>
          <br />
          <input
            type="checkbox"
            id="Pineapple"
            name="Pineapple"
            value="Pineapple"
          />
          <label for="Pineapple">Pineapple</label>
          <br />
          <input
            type="checkbox"
            id="Extra Cheese"
            name="Extra Cheese"
            value="Extra Cheese"
          />
          <label for="Extra Cheese">Extra Cheese</label>
          <br />
        </div>
        <div>
          <h2>Choice of Substitute</h2>
          <p>Choose up to 1</p>
          <input type="checkbox" id="switch" className="slider" />
          <label for="Gluten Free Crust(+ $100)">
            Gluten Free Crust(+ $100)
          </label>
        </div>
        <div>
          <h2>Special Instructions</h2>
          <input
            type="Text"
            name="additions"
            id="special-text"
            onChange={() => {}}
          />
          <label htmlFor="additions">Anything else you's like to add?</label>
          <br />
        </div>
        <div>
          <br />
          <label htmlFor="extra-order"></label>
          <option value="">-Select-</option>
          <select name="nameinput" onChange={() => {}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <button onSubmit={() => handleSubmit()} id="order-button">
            Add to order
          </button>
        </div>
      </form>
    </div>
  );
}
/*import React, { useState } from "react";
 
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 
export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);
 
  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };
 
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}
*/
