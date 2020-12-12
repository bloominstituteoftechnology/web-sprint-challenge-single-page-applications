import React from "react";
import { Link } from "react-router-dom";

const Confirmation = (props) => {
    return (
        <div>
            <h2>Thank you for your order!</h2>
            {Object.keys(props.order).map(property => {
                return <p>{property}: {props.order[property]}</p>
            })}
        </div>
    );
};
export default Confirmation;