import React from 'react'

export const PizzaList = (props) => {
    const {order} = props
    return (
        <div>
            <h1>Your Orders</h1>
            <div className='orderContainer'>
                <h4>{order.name}</h4>
                <h4>{order.size}</h4>
                <h4>{order.specialInstructions}</h4>
                {
                    order.toppings.map(topping => {
                        return(
                        <h4>{topping}</h4>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default PizzaList