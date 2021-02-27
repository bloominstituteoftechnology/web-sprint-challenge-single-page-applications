import React from 'react'

export default function OrderConfirm(props) {
    const {values} = props

    return(
        <div>
            <h1>Congratulations {values.customerName}</h1>
            <p>
                Your order has been placed and you'll never see it... but you ordered
                <br/>a {values.size} pizza with {values.sauce} sauce, {values.items} {values.instructions}
            </p>
        </div>
    )
}