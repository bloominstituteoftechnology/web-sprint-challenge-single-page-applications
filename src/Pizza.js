import React from 'react'

function Pizza(props) {
const {newOrder} = props
    return (
        <div>
            <h2>Your Order Is On the Way</h2>
            <p>Name: {newOrder.name}</p>
            <p>Email: {newOrder.email}</p>
            <p>Phone: {newOrder.phone}</p>
            <p>Size: {newOrder.size}</p>
            <p>Sauce: {newOrder.sauce}</p>
            <p>Special Instructions: {newOrder.textarea}</p>
        </div>
    )
}
export default Pizza 