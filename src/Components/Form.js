import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.name.length < 2) {
      alert("name must be at least 2 characters");
    }
  };
  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Enter your name:
        <input
          id="name-input"
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <br />

      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="cheese"
          value={inputs.cheese || "cheese"}
          onChange={handleChange}
        />{" "}
        cheese:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="pineapple"
          value={inputs.pineapple || "pineapple"}
          onChange={handleChange}
        />
        pineapple:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="pepperoni"
          value={inputs.pepperoni || "pepperoni"}
          onChange={handleChange}
        />
        pepperoni:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="olives"
          value={inputs.olives || "olives"}
          onChange={handleChange}
        />{" "}
        olives:
      </label>
      <br />


      <label htmlFor="Size">
        <select
          id="size-dropdown"
          className="Size"
          name="Size"
          onChange={handleChange}
          value={inputs.Size || "Size"}
        >
        <option value="SMALL">SMALL</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="LARGE">LARGE</option>
        
        </select>
      </label>
      <br />

      <label htmlfor="special-text">Special Instructions:</label>
      <textarea
        id="special-text"
        name="specialText"
        value={inputs.specialText || ""}
        onChange={handleChange}
        
      ></textarea>
      <br />

      {/* <input id="order-button" type="submit" /> */}
      <button id="order-button" type="submit">
        Order
      </button>
    </form>
  );
};

export default Form;
