import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Confirmatin from "./Confirmatin"



function PizzaForm(props) {
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

        <form id="pizza-form" onSubmit={onSubmit}>
            <h1> Pizza</h1>
            <div id="name-input">{errors.name}</div>
            <label htmlFor="name">Name</label>
            <input type='text' name='name'
                onChange={onChange}
                value={values.name} />

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

            <label>Bacon
                <input name="bacon" type="checkbox" checked={values.bacon} onChange={onChange} />
            </label>
            <label>Peperoni
                <input name="peperoni" type="checkbox" checked={values.peperoni} onChange={onChange} />
            </label>
            <label>Sausage
                <input name="sausage" type="checkbox" checked={values.sausage} onChange={onChange} />
            </label>
            <label>MeatBall
                <input name="meatball" type="checkbox" checked={values.meatball} onChange={onChange} />
            </label>





            <label htmlFor="special">Special-selection</label>
            <input id="special-text" type="text" name="special"
                onChange={onChange} value={values.special} />


            <button id="order-button" disabled={disabled}>Submit</button>


        </form>
    )

}
export default PizzaForm