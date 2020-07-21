import React from 'react';
import styled from 'styled-components';
import { object } from 'yup';

const OrderCard = ({ order}) => {

    const displayToppings = () => {
        const toppings = Object.keys(order.toppings);

        const orderedToppings = []

        return toppings.forEach(key=> {
            if (order.toppings[key]) {
                orderedToppings.push(key);
            }
        })
        return orderedToppings;
    }

    return(
        <div>
            <h2>{order.name}</h2>
            <h3>{order.phone}</h3>
            <h3>{order.email}</h3>
            <p>{order.pizzaSize}</p>
            {displayToppings().map(toppings => <p>{toppings}</p>)}
            <p>{order.instructions}</p>
        </div>
    )
}

export default OrderCard;