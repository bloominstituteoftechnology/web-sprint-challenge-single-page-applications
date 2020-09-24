import React from 'react'
import styled from 'styled-components'
import Form from './Form'

function ConfirmationPage() {
    return (
        <StyledMain>
            <h1>Order Success - Your Pizza it on the way!</h1>
            <img src="https://image.freepik.com/vector-gratis/pizza-chef_26838-73.jpg" alt="" />
            {/* <article>
                <h2>Order Summary</h2>
                <ul>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                    <li>Size: {size}</li>
                    <li>Toppings: {toppings.map((t, i) => (<span key={i}>{t}, </span>))}</li>
                    <li>Glutten Free: {gluttenFree ? 'yes' : 'no'}</li>
                </ul>
                <button onClick={placeOrder}>Place order</button>
            </article>
            <article>
                <h2>Order Placed</h2>
                <ul style={{'display': placed ? 'block' : 'none'}}>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                    <li>Size: {size}</li>
                    <li>Toppings: {toppings.map((t, i) => (<span key={i}>{t}, </span>))}</li>
                    <li>Glutten Free: {gluttenFree ? 'yes' : 'no'}</li>
                </ul>
            </article> */}
            <h2>Buon Appetito!</h2>
        </StyledMain>    
    )
}

const StyledMain = styled.main `
h1, h2 {
    padding: 25px;
    font-size: 3em;
    text-align: center;
    /* margin: 0 auto; */
    font-style: italic;
    text-shadow: 2px 2px 2px whitesmoke;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* opacity: 75%; */
    border-radius: 15px;
    box-shadow: 5px 5px 5px whitesmoke;
    text-align: center;
    width: 50%;
}
`

export default ConfirmationPage