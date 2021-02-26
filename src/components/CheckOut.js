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

const CheckOut = props => {
    return (
        <OrderComplete>

            <HellYeah>
                <OnTheWay>You're about to have the best damn pizza... in like 20 minutes.</OnTheWay>
            </HellYeah>

        </OrderComplete>
    )
}

export default CheckOut