/** 
 * TO DO: 
 * -- change choice of sauce to radio
 * -- adjust alignment for all headings and text
 * -- increase size of special instructions box
 */

import styled from "styled-components";
import React, { useState } from "react";

const backgroundImg = "https://blog.caseys.com/caseysposts/c910bf0fa78642cf8dc556a1042a3a55/image/embed";
const headerHeight = "30vh";

// Border on elements for developing page layout;
// conditionals included in styling code
const borderOn = false;

// Form styling
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0;
    border: 2px solid black; 
    margin: 3rem auto;

    
    * {
        font-family: "Gill Sans", "Helvetica", sans-serif;
    }

    form {
        width: 100%;
    }
    
    .image {
        background-image: url(${backgroundImg});
        background-size: cover;
        height: ${headerHeight};
    }
    
    // Top "Build your own pizza"
    h2 {
        text-align: center;
        font-size: 2rem;
        padding: 2rem;
    }

    .form-section {
        display: flex;
        width: 100%;
        margin: 0;
        font-weight: bold;
        display: flex;
        flex-direction: column;
    }


    .form-section-text {
        padding: 2%;
        border: ${borderOn ? "1px solid blue" : "none" }; 
        background-color: lightgray;
        width: 100%;
    }

    p.error-message {
        color: red;
    }

    // section heading ("name", "choice of size", etc)
    h4 {
        font-size: 1.1rem;
        padding: .1rem;
    }
    
    p {
        margin: .1rem;
        font-weight: normal;
        font-style: italic;
    }

    .toppings-list {
        display: flex;
        flex-direction: column;
        justify-items: start;
        align-items:start;
        border: ${borderOn ? "2px solid yellow" : "none" }; 
        margin: 0.5rem 0 .5rem 0;

    }

    .topping {
        border: ${borderOn ? "2px solid orange" : "none" }; 
        display: flex;
        align-items: start;
        justify-content: start;
        width: 100%;
        font-weight: normal;
    }

    // second header (under pic), "build your pizza"
    h3 {
        font-size: 1.5rem;
        padding: .5rem 0 .5rem 2rem;
        font-style: italic;
    }

    .input-section {
        padding: .5% 4%;
    }

    #name-input input {
        margin-left: 2rem;
        width: 50%;
        max-width: 80%;
    }

    #special-input input {
        width: 90%;
        max-width: 90%;
        height: 3rem;
        padding-bottom: 2rem;
    }

    input[type=text] {
        border: ${borderOn ? "2px solid green" : "1px solid black" }; 
        margin: 0.5rem 0 0.5rem 2rem;
        width 90%;
        margin: 0.5 auto;
        padding: .2rem;
    }

    input[type=checkbox] {
        border: 3px solid red;
        margin: 0;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        align-text: left;
    }

    select {
        border: ${borderOn ? "2px solid pink" : "1px solid black" }; 
        text-align: center;
        width: 40%;
        margin .5rem 0 .5rem 2rem;
    }

    #sauce-dropdown, #size-dropdown {
        width:40%;
    }

    option {
        text-align: center;
    }
    

    #order-button {
        
    }

    #order-button {
        justify-self: end;
        align-self: end;
        padding: 1%;
        margin: 2%;
        margin-top: .5rem;
        border-radius: 3px;
        width: auto;
        float: right;
    }
`;



export default function OrderForm(props) {

    const { values, // values in form fields
            submit, // submit function in App
            change, // formValue update function in App
            disabled, // disabled status of Submit button
            errors, // error messages for validation
          } = props;

    // When Submit button is pressed, prevent page from reloading and then run the submit() function (a props passed through from App.js)
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    // When any value of any field is changed, update the value of that field in the formsValue by passing it through the change prop from App.js
    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const newVal = type === "checkbox" ? checked : value; 
        change(name, newVal);    
    }

    // The entire form page itself at "/pizza"
    return (
        <FormContainer className="form-container">
            <h2>Build Your Own Pizza</h2>
            <div className="image"></div>
            <form id="pizza-form" onSubmit={onSubmit}>
                <h3>Build your pizza:</h3>
                <div className="form-section" id="name-input">
                    <div className="form-section-text">
                        <h4>Name</h4>
                        <p>Required</p>
                        <p className="error-message">{errors.name}</p>
                    </div>
                    <input 
                        type="text"
                        name="name"
                        id="name-input"
                        className="input-section"
                        value={values.name}
                        onChange={onChange}
                    />
                </div>
                <div className="form-section" id="size-input">
                    <div className="form-section-text">
                        <h4>Choice of Size</h4>
                        <p>Required</p>
                        <p className="error-message">{errors.size}</p>
                    </div>
                    <select 
                        name="size" 
                        value={values.size}
                        onChange={onChange}
                        id="size-dropdown"
                        className="input-section">
                        <option value="">====Select====</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X-Large</option>
                    </select>
                </div>
                <div className="form-section" id="sauce-input">
                    <div className="form-section-text">
                        <h4>Choice of Sauce</h4>
                        <p>Required</p>
                        <p className="error-message">{errors.sauce}</p>
                    </div>
                    <select name="sauce" value={values.sauce} onChange={onChange} id="sauce-dropdown" className="input-section">
                        <option value="">====Select====</option>
                        <option value="marinara">Marinara</option>
                        <option value="pesto">Pesto</option>
                        <option value="bbq">Barbecue Sauce</option>
                        <option value="white">White Garlic Sauce</option>
                    </select>
                </div>
                <div className="form-section" id="toppings">
                    <div className="form-section-text">
                        <h4>Add Toppings</h4>
                    </div>
                    <div className="toppings-list">
                        <span id="garlic" className="topping input-section">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="garlic"
                                className="input-section"
                                checked={values.garlic}
                                onChange={onChange}
                            /> Garlic
                        </span>
                        <span id="green-pepper" className="topping input-section">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="green_pepper"
                                checked={values.green_pepper}
                                onChange={onChange}
                            />
                            Green Peppers
                        </span>
                        <span id="olives" className="topping input-section">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="olives"
                                checked={values.olives}
                                onChange={onChange}
                            />
                            Black Olives
                        </span>
                        <span id="onions" className="topping input-section">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="onions"
                                checked={values.onions}
                                onChange={onChange}
                            />
                            Onions
                        </span>
                        <span id="pineapple" className="topping input-section">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="pineapple"
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                            Pineapple
                        </span>
                    </div>
                </div>
                <div className="form-section" id="special-input">
                    <div className="form-section-text">
                        <h4>Special Instructions</h4>
                        <p className="error-message">{errors.special}</p>
                    </div>
                    <input 
                        name="special"
                        id="special-text"
                        type="text"
                        className="input-section"
                        value={values.special}
                        onChange={onChange}
                        placeholder="Any special instructions you'd like to add?"
                    />
                </div>

                <button id="order-button" disabled={disabled}>Add to Order</button>

            </form>
        </FormContainer>
    )
}