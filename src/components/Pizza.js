import React from "react";

export default function Pizza(props){
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Create your pizza below:</h2>
            
            <h3>Who's this pizza for?</h3>
                <label>
                    Name: 
                    <input 
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        name="name"
                    />
                </label>

            <h3>How big?</h3>
        </form>
    )
}