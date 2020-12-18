import React from "react";

export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUSe = type === "checkbox" ? checked : value;
    change(name, valueToUSe);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Create your pizza</h2>

       

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
        </div>
      </div>

     
 

        <label>
          Your name:
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          Size:
          <select onChange={onChange} value={values.role} name="size">
            <option value="">- Select an option -</option>
            <option value="small">Smalll</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">XLarge</option>
          </select>
        </label>

        <div className="radios">
        <h3>Pick Your Sauce:</h3>
        
        <label>
          Original Red
          <input
            type="radio"
            name="sauce"
            value="original"
            onChange={onChange}
            checked={values.sauce === "original"}
          />
        </label>
        <label>
          Garlic Ranch
          <input
            type="radio"
            name="sauce"
            value="ranch"
            onChange={onChange}
            checked={values.sauce === "ranch"}
          />
        </label>

        <label>
          BBQ Sauce
          <input
            type="radio"
            name="sauce"
            value="bbq"
            onChange={onChange}
            checked={values.sauce === "bbq"}
          />
        </label>
        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="alfredo"
            onChange={onChange}
            checked={values.sauce === "alfredo"}
          />
        </label>
      </div>

      <div className="checkboxes">
        <h3>Pick your Toppings:</h3>

        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>
          Canadian Bacon
          <input
            type="checkbox"
            name="canadianBacon"
            checked={values.canadianBacon}
            onChange={onChange}
          />
        </label>

        <label>
          Chicken
          <input
            type="checkbox"
            name="chicken"
            checked={values.chicken}
            onChange={onChange}
          />
        </label>

        <label>
          Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.olives}
            onChange={onChange}
          />
        </label>

        <label>
          Peppers
          <input
            type="checkbox"
            name="peppers"
            checked={values.peppers}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="instructions">
        
     
          <h3>
            Special instructions
          </h3>
          <input
            value={values.specialInstructions}
            onChange={onChange}
            name="specialInstructions"
            type="text"
          />
       
      </div>
      
        <button id="submit" disabled={disabled}>Order</button>
    </form>
  );
}
