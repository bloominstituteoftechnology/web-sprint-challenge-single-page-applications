import React from "react";
import * as yup from "yup";


export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  //makes the submit function
  function onSubmit(evt) {
    evt.preventDefault();
    submit();
    window.alert("Your form has been sent!");
  }

  //makes the onCHange function
  function onChange(evt) {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="create-account">
        <h2>Create a pizza</h2>
      </div>
      <div className="errors">
        <div>{errors.pizzasize}</div>
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
      </div>
    
      <div className="form-div inputs">
        <label>
          Choice of size
          <select
            value={values.pizzasize}
            onChange={onChange}
            name="pizzasize"
          >
          <option value=''>Pizza size</option>
          <option value='perosnal'>Personal pizza</option>
          <option value='small'>Small pizza</option>
          <option value='medium'>Medium pizza</option>
          <option value='large'>Large pizza</option>
          <option value='xlarge'>Extra Large pizza</option>
          </select>
        </label>
        <div className='suaces'>
        <label>
          original red
          <input
            value='originalred'
            onChange={onChange}
            name="sauce"
            type="radio"
            checked={values.sauce === 'originalred'}
          ></input>
        </label>

        <label>
          Garlic Ranch
          <input
            value='garlicranch'
            onChange={onChange}
            name="sauce"
            type="radio"
            checked={values.sauce === 'garlicranch'}
          ></input>
        </label>

        <label>
          BBQ Sause
          <input
            value='bbqsauce'
            onChange={onChange}
            name="sauce"
            type="radio"
            checked={values.sauce === 'bbqsauce'}
          ></input>
        </label>

        <label>
          Spinach Alfredo
          <input
            value='spinachalfedo'
            onChange={onChange}
            name="sauce"
            type="radio"
            checked={values.sauce === 'spinachalfedo'}
          ></input>
        </label>
        </div>

        <label>
            pepperoni
            <input
            type='checkbox'
            name='pepperoni'
            checked={values.pepperoni}
            onChange={onchange}>

            </input>
            </label>

            <label>
            Sausage
            <input
            type='checkbox'
            name='sausage'
            checked={values.sausage}
            onChange={onchange}>
                
            </input>
            </label>

            <label>
            Bacon
            <input
            type='checkbox'
            name='bacon'
            checked={values.bacon}
            onChange={onchange}>
                
            </input>
            </label>

            <label>
            Spicy Sausage
            <input
            type='checkbox'
            name='spicysausage'
            checked={values.spicysausage}
            onChange={onchange}>
                
            </input>
            </label>

            <div className='choiceofsub'>
            <label>
            Gluton free crust? (+$1.00)
            <input
            type='checkbox'
            name='gfree'
            checked={values.gfree}
            onChange={onchange}>
                
            </input>
            </label>
            </div>

            <label>
          Special Instructions
          <input
            value={values.special}
            onChange={onChange}
            name="special"
            type="text"
          />
          </label>
       
      </div>
      <div className="submit-button">
   
        <button id="submitBtn" disabled={disabled}>
          Add to order
        </button>
      </div>
    </form>
  );
}
