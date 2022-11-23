import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Confirmatin from "./Confirm";



function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }




    return (
    <div className="form-wrapper">
                <h1 id="ownpizza">Build your own pizza</h1>
        <form id="pizza-form" onSubmit={onSubmit}>
            <h1> Pizza</h1>
            <div id="name-input">{errors.name}</div>
            <label htmlFor="name">Name</label>
            <input type='text' name='name'
                onChange={onChange}
                value={values.name} />

    <div id="size-wrapper">
            <label htmlFor="size">Size</label>
            <select id="size-dropdown"
                name="size" onChange={onChange} value={values.size}>
                <option value=''> - select a Size -</option>
                <option value="SM">
                    Small
                </option>
                <option value="MD">
                    Medium
                </option>
                <option value="LG">
                    Large
                </option>
            </select>
    </div>
        <h2>Pick your Sauces</h2>
    <div id="sauce-wrapper">

        <label id="grac" > OG Red
            <input name="red" type="radio" checked={values.sauce1}   onChange={onChange} />
        </label>
        <label id="grac" >Butter Gralic
            <input name="Butter-g" type="radio" checked={values.sauce2}   onChange={onChange} />
        </label>
        <label id="grac" >BBQ Sauce
            <input name="bbq" type="radio" checked={values.sauce3}   onChange={onChange}  />
        </label>
    </div>

        <h2 id="pyt"> Pick Your Toppings </h2>
    <div id="toppings-wrapper3">

            <div id="toppings-wrapper">
            <label>Bacon
                <input name="bacon" type="checkbox" checked={values.bacon} onChange={onChange} />
            </label>
            <label>Peperoni
                <input name="peperoni" type="checkbox" checked={values.peperoni} onChange={onChange} />
            </label>
            <label>Sausage
                <input name="sausage" type="checkbox" checked={values.sausage} onChange={onChange} />
            </label>
            <label>MeatBalls
                <input name="meatball" type="checkbox" checked={values.meatballs} onChange={onChange} />
            </label>
            <label>Grilled Chicken
                <input name="chicken" type="checkbox" checked={values.chicken} onChange={onChange} />
            </label>
            </div>

            <div id="toppings-wrapper2">
            <label>Onions
                <input name="onions" type="checkbox" checked={values.onions} onChange={onChange} />
            </label>
            <label>Green Pepper
                <input name="pepper" type="checkbox" checked={values.greenPepper} onChange={onChange} />
            </label>
            <label>Dice Tomatos
                <input name="Dice-Tomatos" type="checkbox" checked={values.tomato} onChange={onChange} />
            </label>
            <label>Black Olives
                <input name="Black-Olives" type="checkbox" checked={values.Bolives} onChange={onChange} />
            </label>
            <label>Roasted Garlic
                <input name="Roasted-Garlic" type="checkbox" checked={values.Rgarlic} onChange={onChange} />
            </label>
            </div>
    </div>

    <div id="special-wrapper">
        <h2> Special Instructions</h2>
        <p>Help us make it right</p>
            <label htmlFor="special">Special-selection</label>
            <input id="special-text" type="text" name="special"
                onChange={onChange} value={values.special} />




   </div>
               <button id="order-button" disabled={disabled}>Submit
                </button>  
        </form>
     </div>
    )

}
export default Form