import React, { useState } from 'react';

const Form = props => {
  
    return (
        <form>
            <label htmlForm="name">
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Please Enter Name Here"
                />
            </label>
            <br />
            <label htmlFor="pizzaSize">
                Choice Of Size
                <select name="pizzaSize">
                    <option value="personal">Personal</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>

            <div>
                <h2>Choice Of Sauce</h2>
                <p>Required</p>
                <label htmlFor="original">
                    <input name="original" type="checkbox"/>
                    Original Red
                </label>
                <label htmlFor="garlic">
                    <input name="garlic" type="checkbox"/>
                    Garlic Ranch
                </label>
                <label htmlFor="bbq">
                    <input name="bbq" type="checkbox"/>
                    BBQ Sauce
                </label>
                <label htmlFor="alfredo">
                    <input name="alfredo" type="checkbox"/>
                    Spinach Alfredo
                </label>
            </div>

            
            <div>
                <h2>Add Toppings</h2>
                <label htmlFor="pepperoni">
                    <input name="pepperoni" type="checkbox"/>
                    Pepperoni
                </label>
                <label htmlFor="sausage">
                    <input name="sausage" type="checkbox"/>
                    Sausage
                </label>
                <label htmlFor="onions">
                    <input name="onions" type="checkbox"/>
                    Onions
                </label>
                <label htmlFor="olives">
                    <input name="olives" type="checkbox"/>
                    Olives
                </label>
            </div>

            <label htmlFor="instructions">
                Special Instructions
                <input 
                    id="instructions"
                    type="text"
                    name="instructions"
                    placeholder="type here"
                />
            </label>
            <br />
            <button>Submit</button>

        </form>

    )

}

export default Form