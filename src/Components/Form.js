

import React from "react";







export default function Form(props) {

  const{ 
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props;

  const formSubmit = event =>{
    event.preventDefault()
    submit()
  }

  const onCheckboxChange = event => {
    const { name, checked } = event.target
    checkboxChange(name, checked)
  }
const onInputChange = event => {
  const { name, value } = event.target
  inputChange(name, value)
}
 

  return (
    <form className="form" onSubmit={formSubmit}>

      <div className="errors">
        <p>{errors.name}</p>
        <p>{errors.size}</p>
        <p>{errors.instructions}</p>
      </div>
       
      <label htmlFor="name" className="name">
        Name: 
      </label>
      <input
        id= "name"
        type="text"
        placeholder="Enter Name Here"
        className="text"
        name="name"
        onChange={onInputChange}
        value={values.name}
        
      />
        
      <label htmlFor="size" className="size">
        Choice of Size 
      </label>
      <select id="size" 
      className="options" 
      name="size" 
       onChange={onInputChange}  value={values.size}>
        <option value="Select">Select</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      
      

      <h2 className="sauce">Add Toppings</h2>
      <div className="selection">
        <label htmlFor="pepperoni">Pepperoni</label>
        <input
          type="checkbox"
          id="pepperoni"
          name="pepperoni"
          checked={values.toppings.pepperoni === true}
          onChange={onCheckboxChange}
        />

        <label htmlFor="sausage">Sausage</label>
        <input
          type="checkbox"
          id="sausage"
          name="sausage"
          checked={values.toppings.sausage === true}
          onChange={onCheckboxChange}
        />

        <label htmlFor="tomatoes">Tomatoes</label>
        <input
          type="checkbox"
          id="tomatoes"
          name="tomatoes"
          checked={values.toppings.tomatoes === true}
          onChange={onCheckboxChange}
        />

        <label htmlFor="garlic">Garlic</label>
        <input
          type="checkbox"
          id="garlic"
          name="garlic"
          checked={values.toppings.garlic === true}
          onChange={onCheckboxChange}
        />
      </div>

      <label htmlFor="instruction" className="instruction">
        Special Instructions <span role="img" aria-label="emoji hand holding pen">✍️</span>
      </label>
      <textarea
        placeholder="Anything you need to tell us?"
        name="instructions"
        onChange={onInputChange}
        value={values.instruction}
      />
 
    
 <button className="btnOrder" type="submit" disabled={disabled}>Add To Order</button>
    </form>
  );
}
