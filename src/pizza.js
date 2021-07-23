import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function OrderPizza(props) {
    const { values, submit, change, disabled, errors, update } = props;


    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)//put a debugger on the parent App.js updateForm and verify working. 
      }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };
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

                <button disabled={disabled}>submit</button>

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
