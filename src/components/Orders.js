import React from 'react';

export default function Orders(props) {
    const order = props.order;
    let sauceKeys = Object.keys(order.sauce);
    let sauces = sauceKeys.filter(function (sauceKeys) {
        return order.sauce[sauceKeys]
    });

    let cheeseKeys = Object.keys(order.cheese);
    let cheeses = cheeseKeys.filter(function (cheeseKeys) {
        return order.cheese[cheeseKeys]
    });
    return (
        <div>
            Size: {order.size}<br />
            Sauce: {sauces.join()}<br />
            Cheese: {cheeses.join()}<br />
            Instructions: {order.instructions}
        </div>
    )
}