import React from 'react';

const Pizza = (props) => {
    const {name, size, instructions, pepp, bbqChicken, blkOlives, mushrooms, peppersGreen, ham, pineapple, cheese }= props.order
    return (
    
    <div className="pizza">
        <h2>Your pizza is on the way</h2>
        <h3>Name of Order | {name}</h3>
        <h3>Additional instructions on Order | {instructions}</h3>
        <h3>Size of Order |  {size}</h3>
        <h3>Toppings |  
            {pepp ?" Pepperoni ":" "}
            {bbqChicken ?" BBQ Chicken ":" "}
            {blkOlives ?" Black Olives ":" "}
            {mushrooms ?" Mushrooms ":" "}
            {peppersGreen ?" Green Peppers ":" "}
            {ham ?" Ham ":" "}
            {pineapple ?" Pineapple ":" "}
            {cheese ?" Cheese ":" "}
        </h3>
    </div>
);

};
export default Pizza;
