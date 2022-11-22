import React from "react";
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
import Valid from "./valid"

function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props
    const onSubmit = e => {
        e.preventDefault();
        submit()
    }
    const onChange = e =>{
        const {name, value,type, checked} = e.target
        const valuetoUse = type === "checkbox" ? checked : value
        change(name,valuetoUse)
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <h1> Pizza</h1>
            <div id="name-input">{errors.name}</div>
            <div>
                <label htmlFor="name">Name</label>
                <input
                type="text" name="name"
                onChange={onChange}
                value={values.name} 
                />
                <label htmlFor="size">Size</label>
                <select id="size-dropdown"
                name="size" onChange={onChange} value={values.size}>
                    <option value=''>Select A Size</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                 </select>
                 <label> Bacon
                    <input name="Bacon" type="checkbox" checked={values.bacon} onChange={onChange} /> 
                 </label>
                 <label> Peperoni
                    <input name="Peperoni" type="checkbox" checked={values.peperoni} onChange={onChange} /> 
                 </label>
                 <label> Sausage
                    <input name="Sausage" type="checkbox" checked={values.sausage} onChange={onChange} /> 
                 </label>
                 <label> MeatBalls
                    <input name="meatballs" type="checkbox" checked={values.meatballs} onChange={onChange} /> 
                 </label>
                 <label htmlFor="special">Special-selection</label>
                    <input id="special-text" 
                    type="text" name="special"
                 onChange={onChange} value={values.special}
                 />
                 <button id="order-button" disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}

export default Form;
