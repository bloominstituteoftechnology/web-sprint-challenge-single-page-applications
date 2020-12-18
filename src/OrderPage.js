import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Pizza = styled.div`
    background: #E7E7E7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: .375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
`

const Title = styled.h1``

const Subtitle = styled.h4``

const PizzaSpec = styled.p``

const OrderPage = (props) => {
    const { formValues } = props

    return (
        <Wrapper>
            <Pizza>
                <Title>Your Pizza is on the way!</Title>
                <Subtitle>{formValues.name}</Subtitle>
                <Subtitle>Size: </Subtitle>
                <PizzaSpec>{formValues.size}</PizzaSpec>
                <Subtitle>Toppings: </Subtitle>
                <PizzaSpec>{formValues.pepperoni === true ? 'pepperoni' : '' }</PizzaSpec>
                <Subtitle>Special Instructions: </Subtitle>
                <PizzaSpec>{formValues.instructions}</PizzaSpec>
            </Pizza>
        </Wrapper>
    )
}

export default OrderPage