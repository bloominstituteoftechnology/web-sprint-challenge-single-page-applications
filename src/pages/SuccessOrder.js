import React from 'react'
import styled from 'styled-components'

function SuccessOrder() {
    return (
        <Success>
            <div className="inner-content">
                <h1>Success Order</h1>
                <p>Pizza on de wae</p>
            </div>

        </Success>
    )
}

export default SuccessOrder


const Success = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #060606;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner-content{
        text-align: center;
        border: 1px solid green;
        color: green;
        padding: 1rem;

        h1{
            font-size: 3.5rem;
            font-weight: bold;
            padding-bottom: 10px;
        }
        p{
            font-size: 12px;
            letter-spacing: 3px;
        }
    }
` 
