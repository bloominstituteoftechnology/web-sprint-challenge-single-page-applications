import React from 'react'
import styled from 'styled-components'

const ConfirmationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2%;
`

const OrderConfirmationCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: mistyrose;
    height: 40vh;
    width: 54%;
    border-radius: 10px;
    box-shadow: 2px 2px 2px darkgray;
    border: 2px solid darkgray;
    padding-left: 2%;
`


const Confirmation = (props) => {
    const {values} = props
    
    return values.map(order => {

        return (
            <ConfirmationContainer>
                <OrderConfirmationCard>
                    <h4>Name: {order.name}</h4>
                    <h4>Size: {order.size}</h4>
                    <div> Toppings:
                        <ul>{order.pepperoni ? 'pepperoni' : ''}</ul>
                        <ul>{order.bacon ? 'bacon' : ''}</ul>
                        <ul>{order.onion ? 'onion' : ''}</ul>
                        <ul>{order.peppers ? 'peppers' : ''}</ul>
                        <ul>{order.dicedTomatoes ? 'dicedTomatoes' : ''}</ul>
                    </div>
                </OrderConfirmationCard>
            </ConfirmationContainer>
        )

    })
    
}

export default Confirmation