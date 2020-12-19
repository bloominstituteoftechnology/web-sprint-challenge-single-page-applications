import React from "react";

function Builds({ details }) {
    return (
        <div className="build container">
            <h2>{details.name}</h2>
            <p>{details.size}</p>
            <p>{details.sauce}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((tops, idx) => <li key={idx}>{tops}</li>)}
                    </ul>
                </div>
            }
            <p>{details.specialInstructions}</p>
        </div>
    )
}

export default Builds