import React from "react";



export default function Form(props) {
    const { values, submit, change, disabled, errors, update } = props;
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };
    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)//put a debugger on the parent App.js updateForm and verify working. 
      }


    return (
        <form className="form container" id="pizza-form" onSubmit={onSubmit}>
            <div className="form-group submit">
                <div>
                    <h2>Add a User and Pizza </h2>
                </div>
                <label>username
                    <input
                    name='username'
                    type='text'
                    value={onChange}
                    placeholder='type your unsername'
                    maxLength='30'
                    id='name-input'
                    />
                </label>
                <label> Size:
                    <select id='size-dropdown'>
                        <option>
                            --Select Size--
                        </option>
                        <option>
                            Small
                        </option>
                        <option>
                            Medium
                        </option>
                        <option>
                            Large
                        </option>
                        <option>
                            X-Large
                        </option>
                    </select>
                </label>
                {/* <h2>Add Your Toppings</h2> */}
                Add Your Toppings
                <label>
                    <input 
                        type='checkbox'
                        name='ham'
                    /> Ham
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='olives'
                    /> Olives
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='onions'
                    /> Onions
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='cheese'
                    /> Cheese
                </label>

                <label>Special Instructions
                    <input 
                        type='textarea'
                        id='special-text'
                    />
                </label>

                <button id="order-button" disabled={disabled}>Place Order</button>

                <div className="errors">
                    {/* <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div> */}
                </div>
            </div>
        </form>
    );
}
