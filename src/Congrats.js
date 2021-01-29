import React from 'react'

const Congrats = props => {
    const { pizzaData } = props
    return(
        <div>
            <h1>Congrats, Pizza is on the way</h1>
            <p>Order for: {pizzaData.name}</p>
            <p>Pizza Size: {pizzaData.size}</p>
            <p>Toppings:</p>
            {pizzaData.topping1 ? <p>--Extra Cheese</p> : <></>}
            {pizzaData.topping2 ? <p>--Pepperoni</p> : <></>}
            {pizzaData.topping3 ? <p>--Sausage</p> : <></>}
            {pizzaData.topping4 ? <p>--Pineapple</p> : <></>}
        </div>
    )
}
export default Congrats