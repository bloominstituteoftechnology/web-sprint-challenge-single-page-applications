import React from 'react'
import { Link } from 'react-router-dom'

export default function Pizza(props) {
    console.log(props)
    const { order } = props
    return(
        <div className='pizzaContainer'>
            <h1>Your pizza is on its way!</h1>
            <p>Your Order: </p>
            <p>Size: {order.size}</p>
            <p>Sauce: {order.sauce}</p>
            <p>Toppings: {order.toppings}</p>
            <p>Special Instructions: {order.specialInstructions}</p>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    )
}
