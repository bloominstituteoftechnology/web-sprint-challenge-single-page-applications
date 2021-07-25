import React from "react";
import "./form.css";
import Styled from 'styled-components';



const TextInputa = Styled.input`
    width: 70%;
    margin: 0.5rem 1rem 0.75rem 1rem;
    padding: 0.15rem 6rem 0.15rem 0.25rem;
`
const TextInputb = Styled.input`
    width: 50%;
    margin: 0.5rem 1rem 0.75rem 1rem;
    padding: 0.15rem 6rem 0.15rem 0.25rem;
`

export default function Form(props) {
    const { formValues, change, submit, disabled, errors } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value

        change(name, valueToUse)
    }
    const onSubmit = evt => {
        evt.preventDefault()
    submit()
    }

    return (
            <div className="Boxxy">
            <form id="pizza-form" onSubmit={onSubmit}>
            <h4>Select your pizza styles</h4>
            <div className='errors'>
              <div>{errors.name}</div>
              <div>{errors.size}</div>
            </div>
            <TextInputa
                    className='text-input'
                    type='text'
                    id='name-input'
                    name='name'
                    value={formValues.value}
                    onChange={onChange}
                    placeholder="Please insert your name">
                </TextInputa>
                <h4>Pick a size of pizza</h4>
            <select id="size-dropdown" name="size" value={formValues.value} onChange={onChange}>
                <option value="">SelectOne</option>
                <option value="s">Smallboi</option>
                <option value="m">mediumboi</option>
                <option value="l">Largboi</option>
            </select>
            <h4>Pick a Topping</h4>
            <label htmlFor = "pepperoni"> Pepperoni
                    <input className = "box"
                    type = "checkbox"
                    name = "Pepperoni"
                    checked = {formValues.meat}
                    onChange={onChange}
                    />
                </label>
                <label htmlFor = "chicken"> chicken
                    <input className = "box"
                    type = "checkbox"
                    name = "chicken"
                    checked = {formValues.meat}
                    onChange={onChange}
                    />
                </label>
                <label htmlFor = "peppers"> peppers
                    <input className = "box"
                    type = "checkbox"
                    name = "peppers"
                    checked = {formValues.meat}
                    onChange={onChange}
                    />
                </label>
                <label htmlFor = "Ham"> Ham
                    <input className = "box"
                    type = "checkbox"
                    name = "Ham"
                    checked = {formValues.meat}
                    onChange={onChange}
                    />
            </label>   
            <TextInputb
                    className='text-input'
                    type='text'
                    id='special-text'
                    name='special'
                    value={formValues.value}
                    onChange={onChange}
                    placeholder="Anything else you'd like to add?">
                </TextInputb>
            <div>
                    <button id = "order-button" disabled={disabled}>Add to Order</button>
                </div>
            </form>
            </div>


    )
}