import React from 'react';
import { Link } from 'react-router-dom';

export default function Pizza({ order }) {

    // const orderArray = Object.values(order);
    console.log(order)

    if (!order) {
        return(
            <div className='pizza container'>

                <h3>Working fetching your order details...</h3>

                <Link 
                    to='/'>
                    Go Home
                </Link>

            </div>
        )
    }

return (
    <div className='pizza container'>

        <h1>Your pizza is on its way!</h1>

        <h2>Receipt:</h2>

        {/* {orderArray.map(pizzaOrder => {
            return(
                <div>
                    <p key={pizzaOrder.id}>Name: {pizzaOrder.name}</p>
                    <p key={pizzaOrder.id}>Phone: {order.phone}</p>
                    <p key={pizzaOrder.id}>Size: {order.size}</p>
                    <p key={pizzaOrder.id}>Sauce: {order.sauce}</p>
                    <p key={pizzaOrder.id}>Toppings: {order.toppings}</p>
                    <p key={pizzaOrder.id}>Special Instructions: {order.specialInstructions}</p>
                </div> 
            )
        })} */}

        <Link 
            to='/'>
            Go Home
        </Link> 

    </div>
  )
}