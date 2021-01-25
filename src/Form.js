import './App.css';
import './slider.css';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Input from './Input.js';
import Checkbox from './Checkbox.js';
import { useHistory } from 'react-router-dom';
import schema from './formSchema.js';
import Header from './Header.js';


function Form(props) {
  const { setPizza } = props;

  // // ------------------ Initial States -------------

  const initialFormValues = {
    personName: '',
    pizzaSize: '', 
    redOriginal: '',
    garlicRanch: '',
    bbqSauce: '',
    spinachAlfredo: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomato: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
    glutenFree: false,
    specialInstructions: '',
  };

  const initialFormErrors = {
    personName: '',
    pizzaSize: '', 
    redOriginal: '',
    garlicRanch: '',
    bbqSauce: '',
    spinachAlfredo: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomato: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
    glutenFree: false,
    specialInstructions: '',
  };

  const history = useHistory();

  const initialDisabled = false; // change back to true after testing
  // -------------------- States -----------------
  // const [pizza, setPizza] = useState({}); // empty object pizza
  const [formValues, setFormValues] = useState(initialFormValues); // inputs
  const [formErrors, setFormErrors] = useState(initialFormErrors); // errors, mechanism for reset
  const [disabled, setDisabled] = useState(initialDisabled) // boolean, for submit button 
  // const [formState, setFormState] = useState(false); // checkbox

  // -------------------- Helper Functions -----------------
  const postNewPizza = newPizza => {
      axios.post('https://reqres.in/api/pizza', newPizza)
        .then(res => {
          setPizza(res.data)
          console.log("New Pizza: ", res.data);
          console.log("Successful res back from Axios, res.data: ", res.data);

          setFormValues(initialFormValues); // reset form

          history.push(`/pizza/order`); // route to order conf page



        })
        .catch(err => {
          console.log("Error: ", err)
          history.push(`/error`)
          debugger
        })
  } // posts and resets form

  const validate = (name, value) => {
  console.log("validate: ", name, value)
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))

    console.log("passes form validation")
  }; // run validation with yup


  // -------------------- Event Handlers -----------------


  const inputChange = (e) => {
    const { name, type, value, checked } = e.target;
    // console.log(`name: ${name}, value: ${value}`);
    const inputValue = type === 'checkbox' ? checked : value;
    console.log("inputValue: ", inputValue)
    validate(name, inputValue);
    setFormValues({ ...formValues, [name]: inputValue }); // [ ] is not an array
  } 

  const formSubmit = (e) => {

    console.log("form was submitted")
      e.preventDefault(); //  to prevent browser refresh

      const newPizza = {
          personName: formValues.personName,
          pizzaSize: formValues.pizzaSize,
          redOriginal: formValues.redOriginal,
          garlicRanch: formValues.garlicRanch,
          bbqSauce: formValues.bbqSauce,
          spinachAlfredo: formValues.spinachAlfredo,
          pepperoni: formValues.pepperoni,
          sausage: formValues.sausage,
          canadianBacon: formValues.canadianBacon,
          spicyItalianSausage: formValues.spicyItalianSausage,
          grilledChicken: formValues.grilledChicken,
          onions: formValues.onions,
          greenPepper: formValues.greenPepper,
          dicedTomato: formValues.dicedTomato,
          blackOlives: formValues.blackOlives,
          roastedGarlic: formValues.roastedGarlic,
          artichokeHearts: formValues.artichokeHearts,
          threeCheese: formValues.threeCheese,
          pineapple: formValues.pineapple,
          extraCheese: formValues.extraCheese,
          glutenFree: formValues.glutenFree,
          specialInstructions: formValues.specialInstructions,
      }

      console.log("new pizza: ", newPizza)
      postNewPizza(newPizza) // post new pizza using helper function postNewPizza

      history.push(`/pizza/order`); // back to home page
  };


    // -------------------- Side Effects -----------------

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
    // console.log("disabled?")
   }, [formValues]); // Adjust the status of 'disabled" every time formValues changes

  useEffect(() => {
    console.log("The form Errors have changed", formErrors)
  }, [formErrors]);

  return (
    <div>
      <Header/>

      <form className="pizza-form" onSubmit={formSubmit}>
      
      <div id="form-image-container">
  
          <img id="form-image" src="./pizza-form.jpg" alt="pizza"/>
  
          <h2 className="form-text-on-image">Welcome {formValues.name}! <br/>Build Your Own Pizza</h2>

      </div>

      <Input
          type="text"
          name="personName"
          placeholder=" add your name here "
          onChange={inputChange} 
          value={formValues.personName}
          label={"Name"}
      />
      <div className="errors">{formErrors.personName}</div>

      <h3>Choice of Size</h3>
      <p>Required</p>

      <select name="pizzaSize" onChange={inputChange} id="size-select">
        <option value="">Select</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <div className="errors">{formErrors.pizzaSize}</div>

      <h3>Choice of Sauce</h3>
      <p>Required</p>

      <input type="radio" name="sauce" value="originalRed"/> Original Red
      <input type="radio" name="sauce" value="garlicRanch"/> Garlic Ranch
      <input type="radio" name="sauce" value="bbqSauce"/> BBQ Sauce
      <input type="radio" name="sauce" value="spinachAlfredo"/> Spinach Alfredo
      <div>{formErrors.sauce}</div>

      <h3>Add Toppings</h3>
      <p>Choose up to 10.</p>

      <div className="toppings">
        <div className="topping-column-one">
            <Checkbox topping={"pepperoni"} name={"Pepperoni "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'sausage'} name={"Sausage "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'canadianBacon'}  name={"Canadian Bacon "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'spicyItalianSausage'}  name={"Spicy Italian Sausage "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'grilledChicken'}  name={"Grilled Chicken "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'onions'}  name={"Onions "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'greenPepper'}  name={"Green Pepper "} inputChange={inputChange} formValues={formValues}/><br/>
        </div>

        <div className="topping-column-two">
            <Checkbox topping={'dicedTomato'}  name={"Diced Tomato "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'blackOlives'}  name={"Black Olives "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'roastedGarlic'} name={"Roasted Garlic "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'artichokeHearts'}  name={"Artichoke Hearts "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'threeCheese'}  name={"Three Cheese "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'pineapple'}  name={"Pineapple "} inputChange={inputChange} formValues={formValues}/><br/>
            <Checkbox topping={'extraCheese'}  name={"Extra Cheese "} inputChange={inputChange} formValues={formValues}/><br/>
        </div>
      </div>

      <h3>Choice of Substitute</h3>
      <p>Choose up to 1.</p>

      <div className="slider-container">
        <label className="switch">
          <input id="glutenFreeInput" type="checkbox" name="glutenFree"
      checked={formValues.glutenFree} onChange={inputChange}/> 
          <span className="slider"></span><br/>
        </label>
        <p className="slider-text">Gluten Free Crust + $1.00</p>
      </div>
      <div>{formErrors.glutenFree}</div>

      <h3>Instructions</h3> 

      <Input
          type="text"
          name="specialInstructions"
          className="type-input"
          placeholder="Anything else you'd like to add?"
          onChange={inputChange} 
          value={formValues.specialInstructions}
          label={"Special Instructions"}
      />
      <div className="errors">{formErrors.specialInstructions}</div>

      <div className="form-checkout">
        <p>Incrementor goes here</p>

        <button  id="submitBtn" disabled={disabled}>Add To Order</button> 
      </div>
      {/* <p>Incrementor goes here</p> */}
{/* 
      <button class="button" id="submitBtn" disabled={disabled}>Add To Order</button>  */}

      {/* // render form errors */}
      <div>{formErrors.pepperoni}</div>
      <div>{formErrors.sausage}</div>
      <div>{formErrors.canadianBacon}</div>
      <div>{formErrors.spicyItalianSausage}</div>
      <div>{formErrors.grilledChicken}</div>
      <div>{formErrors.onions}</div>
      <div>{formErrors.greenPepper}</div>
      <div>{formErrors.dicedTomato}</div>
      <div>{formErrors.blackOlives}</div>
      <div>{formErrors.roastedGarlic}</div>
      <div>{formErrors.artichokeHearts}</div>
      <div>{formErrors.threeCheese}</div>
      <div>{formErrors.pineapple}</div>
      <div>{formErrors.extraCheese}</div>

      </form>


    </div>

  );
}

export default Form;