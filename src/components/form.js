import React from "react";
import Styled from "styled-components"


const TextField = Styled.input`
    width: 93%;
    margin: 0.5rem 1rem 0.75rem 1rem;
    padding: 0.15rem 6rem 0.15rem 0.25rem;
`


export default function Form(props) {
    const { formValues, change, submit, disabled, errors } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <div classNaame="main-div">
            <form id="pizza-form" onSubmit={onSubmit}>
            <h4>Select your pizza styles</h4>
            <div className='errors'>
              <div>Name errors: {errors.name}</div>
              <div>Size errors: {errors.size}</div>
            </div>
            <TextField
                    className='text-input'
                    type='text'
                    id='name-input'
                    name='special'
                    value={formValues.value}
                    onChange={change}
                    placeholder="Please insert your name">
                </TextField>
            <select id="size-dropdown" name="size" value={formValues.value} onchange={change}>
                <option value="">SelectOne</option>
                <option value="s">Smallboi</option>
                <option value="m">mediumboi</option>
                <option value="l">Largboi</option>
            </select>
            <label htmlFor = "pepperoni"> Pepperoni
                    <input className = "box"
                    type = "checkbox"
                    name = "meat"
                    checked = {formValues.meat}
                    onsubmit = {onsubmit}
                    />
                </label>
                <label htmlFor = "chicken"> chicken
                    <input className = "box"
                    type = "checkbox"
                    name = "chicken"
                    checked = {formValues.meat}
                    onsubmit = {onsubmit}
                    />
                </label>
                <label htmlFor = "peppers"> peppers
                    <input className = "box"
                    type = "checkbox"
                    name = "peppers"
                    checked = {formValues.meat}
                    onsubmit = {onsubmit}
                    />
                </label>
                <label htmlFor = "Ham"> Ham
                    <input className = "box"
                    type = "checkbox"
                    name = "Ham"
                    checked = {formValues.meat}
                    onsubmit = {onsubmit}
                    />
            </label>   
            <TextField
                    className='text-input'
                    type='text'
                    id='special-text'
                    name='special'
                    value={formValues.value}
                    onChange={change}
                    placeholder="Anything else you'd like to add?">
                </TextField>
            <div>
                    <button id = "order-button" disabled={disabled}>Add to Order</button>
                </div>
            </form>
            


        </div>
    )
}