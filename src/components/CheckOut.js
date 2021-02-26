import React from 'react'
import styled from 'styled-components'

import pizza from './Assets/Pizza.jpg'

const OrderComplete = styled.div``
const HellYeah = styled.div`
    background-image: url(${pizza});
`
const OnTheWay = styled.h1`
    width: 80%;
    margin: auto;
    text-align: center;
    font-size: 3rem;
    padding: 6rem 0;
`

const OrderConfirmation = styled.div`
    width: 60%;
    margin: auto;
`
const Confirm = styled.h2`
    text-align:center;
    font-size: 3rem;
`

const ListIt = styled.div`
    border: 2px dashed black;
    padding: 2rem;
`

const NameOfPizza = styled.h2``

const Specs = styled.p``

const Instruct = styled.div`
    border: 1px solid black;
    padding: 1rem;
`


const CheckOut = props => {

    const {form} = props
    console.log(`kill me`, form)
    
    
    return (
        <OrderComplete>

            <HellYeah>
                <OnTheWay>You're about to have the best damn pizza... in like 20 minutes.</OnTheWay>
            </HellYeah>
            <OrderConfirmation>
                <Confirm>You ready for this pie?</Confirm>
                <ListIt>
                    <NameOfPizza>Your pizza's name is {form.name_of_pizza}</NameOfPizza>
                    <Specs>We're looking at a {form.pizza_size} pie with {form.pizza_sauce}. Heck yeah.</Specs>
                    <Specs>You want toppings? You got toppings. What toppings? <em>*shrug*</em></Specs>
                    <Instruct>
                        <h4>You asked for:</h4>
                        <Specs><em>{form.special_instruction}</em></Specs>
                        <p>We promise nothing.</p>
                    </Instruct>
                </ListIt>
            </OrderConfirmation>

        </OrderComplete>
    )
}

export default CheckOut