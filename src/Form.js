import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const defaultState = {

//     name: '',
//     size: '',
//     sauce: '',
//     toppings: false,
//     instructions: ''
// }





const PizzaForm = () => {

    const [pizzaState, setpizzaState] = useState({
        name: '',
        size: '',
        sauce: '',
        extracheese: false,
        pepperoni: false,
        sausage: false,
        greenpeppers: false,
        instructions: ''
    });

    const [errorState, seterrorState] = useState({ name: '' });

    const validate = e => {
        let value = e.target.name === 'name'
        setpizzaState({ ...pizzaState, [e.target.name]: value });
    };

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "At least two characters required.")
    .required("Name is a required field"),
  size: yup.string().required(),
  sauce: yup.string().required(),
  extracheese: yup.boolean().oneOf([true]),
  pepperoni: yup.boolean().oneOf([true]),
  sausage:yup.boolean().oneOf([true]),
  greenpeppers:yup.boolean().oneOf([true]),
  instructions: yup.string()
});    

    useEffect(() => {
        formSchema.isValid(pizzaState).then(valid => {
            //setButtonDisabled(!valid);
        })
    }, [formSchema, pizzaState]);

    
        
    const validateChange = e => {
        e.persist();
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                seterrorState({
                    ...errorState, [e.target.name]: ""
                })
            })
            
                    
                    .catch(err =>
                        seterrorState({
                            ...errorState, [e.target.name]: err.errorState
                              })
           
                    );
            
            
            
    }
                
    const inputChange = (e) => {
        e.persist(); 
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setpizzaState({ ...pizzaState, [e.target.name]: value });
        validateChange(e);
        
    
     
  
        

    }

    const formSubmit = e => {
      e.preventDefault();
      console.log("form submitted!");
      axios
        .post("https://reqres.in/api/users", pizzaState)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    };

    return (
      <div className ='form'>  
      <form onSubmit={formSubmit}>
            <div>
                <h1>Pizza Order Form</h1>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={pizzaState.name}
              onChange={inputChange}
              error={errorState}
                        />
                        {errorState.name.length > 2 ? (<p className='error'>{errorState.name}</p>) : null}
          </label>
          <label htmlFor="size">
            Pizza Size
            <select
              name="size"
              type="text"
              id="size"
              value={pizzaState.size}
              onChange={inputChange}
            >
              <option value="Choose">Choose a size.</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>

          <label htmlFor="sauce">
            <select
              name="sauce"
              type="text"
              id="sauce"
              value={pizzaState.sauce}
              onChange={inputChange}
            >
              <option value="sauce">Choose a sauce type.</option>
              <option value="red">Standard red sauce</option>
              <option value="bbq">Barbeque sauce</option>
              <option value="white">White garlic sauce</option>
            </select>
          </label>

          <label htmlFor="toppings">
            Toppings
            <input
              type="checkbox"
              id="toppings"
              name="extracheese"
              checked={pizzaState.extracheese}
              onChange={inputChange}
            />
            <label htmlFor="toppings">Extra Cheese</label>
            <br></br>
            <input
              type="checkbox"
              id="toppings"
              name="pepperoni"
              checked={pizzaState.pepperoni}
              onChange={inputChange}
            />
            <label htmlFor="toppings">Pepperoni</label>
            <br></br>
            <input
              type="checkbox"
              id="toppings"
              name="sausage"
              checked={pizzaState.sausage}
              onChange={inputChange}
            />
            <label htmlFor="toppings">Sausage</label>
            <br></br>
            <input
              type="checkbox"
              id="toppings"
              name="greenpeppers"
              checked={pizzaState.greenpeppers}
              onChange={inputChange}
            />
            <label htmlFor="toppings">Green Peppers</label>
            <br></br>
            {/* </label> */}
            <label htmlFor="instructions">
              Special Instructions:
              <textarea
                name="instructions"
                id="instructions"
                value={pizzaState.instructions}
                onChange={inputChange}
              />
            </label>
            <button className='submit'>Add to Order!</button>
          </label>
        </div>
        <button>
          <Link to="/">Back to Home Page</Link>
        </button>
            </form>
    </div>
    );
}
 
export default PizzaForm;