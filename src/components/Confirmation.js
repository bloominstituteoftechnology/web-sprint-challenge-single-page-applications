import React from 'react'
import styled from 'styled-components'

const Containter = styled.div`
`
const ConfirmationDetails = styled.div`
`

const Confirmation = (props) => {
    const {values} = props;
    return values.map(order => {
        return (
            <Containter key={order.id}>
                <ConfirmationDetails>
                    <p>Name: {order.name}</p>
                    <p>Size: {order.size}</p>
                    <div>
                        <ul>{order.pepperoni ? 'pepperoni' : ''}</ul>
                        <ul>{order.onion ? 'onion' : ''}</ul>
                        <ul>{order.greenPepper ? 'greenPepper' : ''}</ul>
                        <ul>{order.tomatoes ? 'tomatoes' : ''}</ul>
                        <ul>{order.gluteFree ? 'gluteFree' : ''}</ul>
                    </div>
                    <p>Additional Instructions: {order.instructions}</p>
                </ConfirmationDetails>
            </Containter>
        )
    })
}

export default Confirmation