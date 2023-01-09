import styled from "styled-components";
import React, { useState } from "react";

const backgroundImg = "https://blog.caseys.com/caseysposts/c910bf0fa78642cf8dc556a1042a3a55/image/embed";
const headerHeight = "30vh";

const FormHeaderStyle = styled.div`
    .image {
        background-image: url(${backgroundImg});
        background-size: cover;
        height: 30vh;
    }

    h2 {
        text-align: center;
        font-size: 2rem;
        padding: 2rem;
        border: 2px solid black;
        border-left: 0;
        border-right: 0;
    }

`;

// Form styling
const OrderFormStyling = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 5rem;

    p.error-message {
        color: red;
        font-weight: normal;
    }

    .form-section {
        background-color: lightgray;
        width: 100%;
    }

    label {
        margin: 10px; 
        font-weight: bold;
        display: flex;
        flex-direction: column;

        input {
            margin-left: 10px;
        }
    }
    #toppings {
        display: flex;
        flex-direction: column;
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
        <div>
            <FormHeaderStyle>
                <div className="image"></div>
                <h2>Build Your Own Pizza</h2>
            </FormHeaderStyle>
            <OrderFormStyling id="pizza-form" onSubmit={onSubmit}>
                <label>
                    <div className="form-section">
                        <h4>Name</h4>
                        <p>Required</p>
                    </div>
                    <p className="error-message">{errors.name}</p>
                    <input 
                        type="text"
                        name="name"
                        id="name-input"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <div className="form-section">
                        <h4>Choice of Size</h4>
                        <p>Required</p>
                    </div>
                    <p className="error-message">{errors.size}</p>
                    <select name="size" value={values.size} onChange={onChange} id="size-dropdown">
                        <option value="">====Select====</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X-Large</option>
                    </select>
                </label>
                <label>
                     <div className="form-section">
                        <h4>Choice of Sauce</h4>
                        <p>Required</p>
                    </div>
                    <p className="error-message">{errors.sauce}</p>
                    <select name="sauce" value={values.sauce} onChange={onChange} id="sauce-dropdown">
                        <option value="">====Select====</option>
                        <option value="marinara">Marinara</option>
                        <option value="pesto">Pesto</option>
                        <option value="bbq">Barbecue Sauce</option>
                        <option value="white">White Garlic Sauce</option>
                    </select>
                </label>
                <label id="toppings">
                    <div className="form-section">
                        <h4>Add Toppings</h4>
                    </div>
                    <span className="garlic">Garlic
                        <input 
                            type="checkbox"
                            name="garlic"
                            checked={values.garlic}
                            onChange={onChange}
                        />
                    </span>
                    <span className="green-pepper">Green Pepper
                        <input 
                            type="checkbox"
                            name="green_pepper"
                            checked={values.green_pepper}
                            onChange={onChange}
                        />
                    </span>
                    <span className="olives">Black Olives
                        <input 
                            type="checkbox"
                            name="olives"
                            checked={values.olives}
                            onChange={onChange}
                        />
                    </span>
                    <span className="onions">Onions
                        <input 
                            type="checkbox"
                            name="onions"
                            checked={values.onions}
                            onChange={onChange}
                        />
                    </span>
                    <span className="pineapple">Pineapple
                        <input 
                            type="checkbox"
                            name="pineapple"
                            checked={values.pineapple}
                            onChange={onChange}
                        />
                    </span>
                </label>
                <label><h4>Special Instructions</h4>
                    <p className="error-message">{errors.special}</p>
                    <input 
                        name="special"
                        id="special-text"
                        type="text"
                        value={values.special}
                        onChange={onChange}
                    />
                </label>

                <button id="order-button" disabled={disabled}>Add to Order</button>

            </OrderFormStyling>
        </div>
    )
}