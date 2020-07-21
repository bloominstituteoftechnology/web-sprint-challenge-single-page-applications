  
import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from 'axios';

const Form = (props) => {

    const defaultState = {
        name: "",
        pizzaSize: "",
        pizzaSauce: "",
        pepperoni: false,
        onions: false,
        sausage: false,
        olives: false,
        instructions:"",
    };

    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({ ...defaultState });
    const [buttonDisabled, setButtonDisabled] = useState(true);

    return (
        <form onSubmit={formSubmit} className="formDiv">
            <h3>Build Your Own Pizza:</h3>
            <label htmlForm="name">
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Please Enter Name Here"
                    onChange={inputChange}
                    value={formState.name}
                    errors={errors}
                />
            </label>
            <br />
            <label htmlFor="pizzaSize">
                Choice Of Size
                <select name="pizzaSize" onChange={inputChange}>
                    <option value="personal">Personal</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>

            <label htmlForm="pizzaSauce">
                Choice of Sauce
                <select name="pizzaSauce" onChange={inputChange}>
                    <option value="original">Original Red</option>
                    <option value="bbq">BBQ Sauce</option>
                    <option value="garlic">Garlic Ranch</option>
                    <option value="alfredo">Spinach Alfredo</option>
                </select>
            </label>


            <div className="toppingDiv">
                <h3>Add Toppings</h3>
                <label htmlForm="pepperoni">
                Pepperoni
                <input onChange={inputChange} 
                    name="pepperoni"
                    type="checkbox"
                    value="pepperoni"
                />
            </label>
            <label htmlForm="sausage">
                sausage
                <input onChange={inputChange} 
                    name="sausage"
                    type="checkbox"
                    value="sausage"
                />
            </label>
            <label htmlFor="onions">
                Onions
                    <input onChange={inputChange} 
                    name="onions" 
                    value="onions" 
                    type="checkbox"/>
            </label>
            <label htmlFor="olives">
                Olives
                    <input onChange={inputChange} 
                    name="olives" 
                    value="olives" 
                    type="checkbox"/>
            </label>
    
            
            </div>

            <label htmlFor="instructions">
                Special Instructions
                <input 
                    id="instructions"
                    type="text"
                    name="instructions"
                    placeholder="type here"
                    onChange={inputChange}
                    value={formState.instructions}
                />
            </label>
            <br />
            <button disabled={buttonDisabled}>Submit</button>

        </form>

    )

}

export default Form