import React, { useState, useEffect} from 'react';
import {Link,Route,useHistory} from "react-router-dom";
import Pizza from "./Pizza";

export default function PizzaOrder(props.) {

const {disabled, values, submit, change, errors, order} = props
const onSubmit = e => {
    e.preventDefault()
        submit()
    }

const onChange = e => { 
    const{name, value ,type, checked} = e.target
    const useValue = type === 'checkbox'? checked : value
    change(name, useValue) 
}
    return (
        <form className='pizzaBox' onSubmit={onSubmit}> 
            <div className="yourPizza">
            <h2>Build your own Pizza</h2>
            <div className="customerOrder">
                <h3>Enter name for the order</h3>
                <p>{errors.name}</p>
                <label>Name
                        <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        />
                    </label>    
                    <h3>Choose your Size</h3>
                    <div>{errors.size}</div>
                    <label>Our Pizzas Are Big.
                        <select name='size' value={values.size} onChange={onChange}>
                            <option value="">-- select Size --</option>
                            <option value="large">Large</option>
                            <option value="xtraLarge">Xtra-Large</option>
                            <option value="xxLarge">XX-Large</option>
                        </select>
                        </label>
                </div>

                <div className="pizzaToppings">
                <h3>Please select your toppings</h3>
                <label>Pepperoni
                        <input
                        value={values.pep}
                        onChange={onChange}
                        type="checkbox"
                        name="pep"
                        />
                </label> 
                <label> BBQ Chicken
                        <input
                        value={values.bbqChicken}
                        onChange={onChange}
                        type="checkbox"
                        name="bbqChicken"
                        />
                </label> 
                <label> Black Olives
                        <input
                        value={values.blkOlives}
                        onChange={onChange}
                        type="checkbox"
                        name="blkOlives"
                        />
                </label>  
                <label> Mushrooms
                        <input
                        value={values.mushrooms}
                        onChange={onChange}
                        type="checkbox"
                        name="mushrooms"
                        />
                </label>
                <label> Green Peppers
                        <input
                        value={values.peppersGreen}
                        onChange={onChange}
                        type="checkbox"
                        name="peppersGreen"
                        />
                </label>
                <label> Ham
                        <input
                        value={values.ham}
                        onChange={onChange}
                        type="checkbox"
                        name="ham"
                        />
                </label>
                <label> Pineapple
                        <input
                        value={values.pineapple}
                        onChange={onChange}
                        type="checkbox"
                        name="pineApple"
                        />
                </label>
                <label> Extra Cheese
                        <input
                        value={values.cheese}
                        onChange={onChange}
                        type="checkbox"
                        name="extraCheese"
                        />
                </label>
                </div>
                <div>
                    <h3>What else can we do for you?</h3>
                        <div>{errors.instructions}</div>
                        <label>Additional Instructions
                            <input
                            value={values.instructions}
                            onChange={onChange}
                            name='instructions'
                            type='textbox'
                            />
                        </label> 
                </div>
    
            <div className='submit'>
                <button disabled={disabled} id='submitBtn'>Submit</button>
            </div>
        </div>
        <div className ='displayOrder'>
            <h2>Your current order so far</h2>
            <h3>Name: {values.name}</h3>
            <h3>Size: {values.size}</h3>
            <h3>Pizza Toppings: {values.pepp ?" Pepperoni ":" "}
                {values.bbqChicken ?" BBQ Chicken ":" "}
                {values.blkOlives ?" Black Olives ":" "}
                {values.mushrooms ?" Mushrooms ":" "}
                {values.peppersGreen ?" Green Peppers ":" "}
                {values.ham ?" Ham ":" "}
                {values.pineapple ?" Pineapple ":" "}
                {values.cheese ?" Cheese ":" "}
            </h3>
            <h3>Additional Instructions {values.instructions}</h3>
            <Link to ='/pizza'>Click to see Completed Order</Link>
        </div>
    </form>
);
};
export default PizzaOrder;