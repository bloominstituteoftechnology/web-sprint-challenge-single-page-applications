import React from 'react';
import styled from 'styled-components';
import { object } from 'yup';

const OrderCard = ({ order}) => {

    const displayToppings = () => {
        const toppings = Object.entries(order.toppings);

        const orderedToppings = []

        toppings.forEach(([key, value])=> {
            if (value) {
                orderedToppings.push([key, value]);
                
            }
        })
        return orderedToppings;
    }

    return(
        <div>
            <h2>Name: {order.name}</h2>
            <h3>Phone: {order.phone}</h3>
            <h3>Email: {order.email}</h3>
            <p>Pizza Size: {order.pizzaSize}</p>
            <div>Toppings:
                {displayToppings().map(([key, value], i) => <p key={i}>{key}</p>)}
            </div>
            <p>instructions: {order.instructions}</p>
        </div>
    )
}

export default OrderCard;