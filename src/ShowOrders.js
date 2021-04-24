import React from "react";

export default function ShowOrders(props){
    const {order}= props;
    if (!order) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }
    return(
        <div className='container'>
        <h2>{order.name}</h2>
        <p>Size: {order.size}</p>
        <p>Pineapple: {order.pineapple}<br/>
           Jalapenos: {order.jalapenos}<br/>
           Mushroom: {order.mushroom}<br/>
           Pepperoni: {order.pepperoni}<br/>
           Special Instructions: {order.instructions}<br/>
        </p>
      </div>
    )
}