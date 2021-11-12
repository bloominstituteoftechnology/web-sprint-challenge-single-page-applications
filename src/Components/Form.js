import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';



const yupForm = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().oneOf(['Small', 'Medium', 'Large']),
    special: yup.string(),
    cheese: yup.boolean(),
    pineapples: yup.boolean(),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    instructions: yup.string(),
})

const defaultVal = {
    name: "",
    sauce: "",
    size: "",
    special: "",
    cheese: false,
    pineapples: false,
    pepperoni: false,
    olives: false,
    instructions: "",
}

function Form() {
    const [isValid, setIsValid] = useState(true);

    const [form, setForm] = useState(defaultVal);

    const [errorState, setError] = useState({
        name: "",
        size: "",
        special: "",
        cheese: "",
        pineapples: "",
        pepperoni: "",
        instructions: "",
    })

    useEffect(() => {
        yupForm.isValid(form)
            .then(valid => {
                setIsValid()
            });
    }, [form]);


    const validate = (e) => {
        yup.reach(yupForm, e.target.name)
            .validate(e.target.value)
            .then(valid => {
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
        setForm({ ...form, [e.target.name]: value });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/orders`, form)
            .then(res => { console.log('RES', res) })
            .catch(err => console.log(err.response));
        setForm(defaultVal)
    };

    return (
        <div>
            <h1>Create your Pizza!!</h1>

            <form onSubmit={formSubmit} id="pizza-form">
                <label 
                htmlFor="name">Your Name: 
                </label>
                <input
                    id="name-input"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={inputChange}
                />
                
                {errorState.name.length > 1 ? <p className="error">{errorState.name}</p> : null}

                <p>
                <label htmlFor="toppings">Pick your Toppings!</label>
                </p>
                <p>
                    <input
                        id="toppings"
                        type="checkbox"
                        checked={form.cheese}
                        onChange={inputChange}
                        name="cheese"
                    />cheese
                    <input
                        id="toppings"
                        type="checkbox"
                        checked={form.pineapples}
                        onChange={inputChange}
                        name="pineapples"
                    />pineapples
                    <input
                        id="toppings"
                        type="checkbox"
                        checked={form.pepperoni}
                        onChange={inputChange}
                        name="pepperoni"
                    />pepperoni
                    <input 
                        id="toppings"
                        type="checkbox"
                        checked={form.olives}
                        onChange={inputChange}
                        name="olives"
                    />olives
                    
                </p>
                <p><label htmlFor="size-dropdown">Pick your size!! </label>
                    <select 
                    id="size-dropdown" 
                    name="size" 
                    value={form.size} 
                    onChange={inputChange}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </p>
               
                <p><label htmlFor="instructions">Special Instructions: </label>
                    <textarea
                        name="instructions"
                        id="special-text"
                        value={form.instructions}
                        onChange={inputChange}
                    /></p>

                <button 
                name="order-button" 
                id="order-button" 
                type="submit">
                    Place Order
                </button>

            </form>
        </div>
    );


}


export default Form;

