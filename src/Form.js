import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';


const formSchema = yup.object().shape({
    name: yup.string().min(2).required('Name is a required field'),
    size: yup.string().required(),
    sauce: yup.string().required(),
    toppings: yup.boolean().oneOf([true]),
    instructions: yup.string()
});


const PizzaForm = () => {

    const [pizzaState, setpizzaState] = useState({
        name: '',
        size: '',
        sauce: '',
        toppings: [],
        instructions: ''
    });

    const [errorState, seterrorState] = useState({
        name: ''
    });

    const validate = e => {
        let value = e.target.name === 'name'
        setpizzaState({ ...pizzaState, [e.target.name]: value })
    };

    

    useEffect(() => {
        formSchema.isValid(pizzaState).then(valid => {
            // setButtonDisabled(!valid);
        });
    }, [pizzaState])

    const inputChange = (e) => {
        e.persist();

        validate(e);
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setpizzaState({ ...pizzaState, [e.target.name]: value });

     yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
       .then(valid => {
         seterrorState({
           ...errorState, [e.target.name]: ""
         })
           .catch(err => {
             seterrorState({
               ...errorState, [e.target.name]: err.errors[0]
             })
           })
       });
  
        

    }

    const formSubmit = (e) => {
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
            />
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
              name="toppings"
              checked={pizzaState.toppings}
              onChange={inputChange}
            />
            <label htmlFor="toppings">Extra Cheese</label>
            <br></br>
            <input
              type="checkbox"
              id="toppings"
              name="toppings"
              checked={pizzaState.name}
              onChange={inputChange}
            />
            <label htmlFor="toppings">Pepperoni</label>
            <br></br>
            <input
              type="checkbox"
              id="toppings"
              name="toppings"
              checked={pizzaState.name}
              onChange={inputChange}
            />
            <label htmlFor="toppings">Sausage</label>
            <br></br>
            <input
              type="checkbox"
              id="toppings"
              name="toppings"
              checked={pizzaState.name}
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
            <button>Add to Order!</button>
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