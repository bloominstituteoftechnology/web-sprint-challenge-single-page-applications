import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function OrderPizza(props) {
    const { values, submit, change, disabled, errors } = props;
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };
    return (
        <form className="form container" id="pizza-form" onSubmit={onSubmit}>
            <div className="form-group submit">
                <div>
                    <h2>Add a User</h2>
                </div>

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
