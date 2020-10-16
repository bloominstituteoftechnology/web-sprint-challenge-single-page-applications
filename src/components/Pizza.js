import React from "react";

export default function Pizza(props){
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <p>This is where you order!</p>
        </div>
    )
}