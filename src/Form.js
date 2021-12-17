import "./App.css";
import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';



const yupForm = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'name must be at least 2 characters'),
    sauce: yup.string().oneOf(['tomato', 'bbq', 'alfredo'], 'Pick One'),
    size: yup.string().oneOf(['Small', 'Medium', 'Large', 'Extra Large'], 'You Must Choose A Size'),
    special: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    ham: yup.boolean(),
    bacon: yup.boolean(),
    pineapple: yup.boolean(),
    mushroom: yup.boolean(),
    greenPepper: yup.boolean(),
    jalapeno: yup.boolean(),
    instructions: yup.string(),
})

const defaultVal = {
  name: "",
  sauce: "",
  size: "",
  special: "",
  pepperoni: false,
  sausage: false,
  ham: false,
  bacon: false,
  pineapple: false,
  mushroom: false,
  greenPepper: false,
  jalapeno: false,
  instructions: "",
}

function Form() {

const [isValid, setIsValid] = useState(true);

const [form, setForm] = useState(defaultVal);

const [errorState, setError] = useState({
    name: "",
    sauce: "",
    size: "",
    special: "",
    pepperoni: "",
    sausage: "",
    ham: "",
    bacon: "",
    pineapple: "",
    mushroom: "",
    greenPepper: "",
    jalapeno: "",
    instructions: "",
})

useEffect(() => {yupForm.isValid(form)
  .then(valid => {
    setIsValid(!valid)
  });
  }, [form]);


const validate = (e) => {
 yup.reach(yupForm, e.target.name)
 .validate(e.target.value)
 .then( valid => {
  setError({
      ...errorState,
      [e.target.name]: ""
    })
    
 })
 .catch(error => {
   console.log(error.errors)
   setError({
     ...errorState,
     [e.target.name]: error.errors[0]
   })
 })
};

const inputChange = e => {
  e.persist();
  validate(e)
  let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
  setForm({...form, [e.target.name]: value });
};

const formSubmit = (e) => {
  e.preventDefault();
  axios.post('https://reqres.in/api/orders', form)
  .then(res => {console.log('RES', res)})
  .catch(err => console.log(err.response));
  setForm(defaultVal)
};

return (
  <div>
    <h1>ORDER YOUR FAVORITE PIZZA BELOW</h1>

<form onSubmit={formSubmit} id="pizza-form">
  <label htmlFor="name">Your Name: </label>
  <input 
    id="name-input" 
    name="name"
    type="text" 
    placeholder="Name" 
    value={form.name} 
    onChange={inputChange} 
  />

  {errorState.name.length > 1 ? <p className="error">{errorState.name}</p> : null}
  
  
<p><label htmlFor="sauce">Choose Your Sauce:</label></p>
  <input 
    type="radio" 
    value="tomato" 
    name="sauce" 
    checked={form.sauce === "tomato"} 
    onChange={inputChange} 
  /> Tomato
  <input 
    type="radio" 
    value="bbq" 
    name="sauce" 
    checked={form.sauce === "bbq"} 
    onChange={inputChange} 
  /> BBQ
  <input 
    type="radio" 
    value="alfredo" 
    name="sauce" 
    checked={form.sauce === "alfredo"} 
    onChange={inputChange} 
  /> Alfredo
  
<p><label htmlFor="size-dropdown">What Size Do You Want Your Pizza? </label>
  <select id="size-dropdown" name="size" value={form.size} onChange={inputChange}>
      <option>---Pick One---</option>
      <option value="Small">Small</option>
      <option value="Medium">Medium</option>
      <option value="Large">Large</option>
      <option value="Extra Large">Extra Large</option>
    </select>
  </p>
<p className="error">{errorState.size}</p>

  <label htmlFor="toppings">Choose Your Toppings Below:</label>
<p>
  <input 
    id="toppings"  
    type="checkbox"  
    checked={form.pepperoni} 
    onChange={inputChange}  
    name="pepperoni" 
  />Pepperoni
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.sausage} 
    onChange={inputChange} 
    name="sausage" 
  />Sausage
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.ham} 
    onChange={inputChange} 
    name="ham" 
  />Ham
  <input id="toppings" 
    type="checkbox" 
    checked={form.bacon} 
    onChange={inputChange} 
    name="bacon" 
  />Bacon
  </p>

<p>
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.pineapple} 
    onChange={inputChange} 
    name="pineapple" 
  />Pineapple
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.mushroom} 
    onChange={inputChange} 
    name="mushroom" 
  />Mushroom
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.greenPepper} 
    onChange={inputChange} 
    name="greenPepper" 
  />Green Peppers
  <input 
    id="toppings" 
    type="checkbox" 
    checked={form.jalapeno} 
    onChange={inputChange} 
    name="jalapeno" 
  />Jalapeno
  </p>

<p><label htmlFor="instructions">Special Instructions ==> </label>
  <textarea 
    name="instructions"
    id="special-text"
    placeholder="Instructions Here"
    value={form.instructions}
    onChange={inputChange}
  /></p>

  <button name="order-button" id="order-button" disabled={isValid} type="submit">
    Submit Order
  </button>

</form>
</div>
);


}


export default Form;