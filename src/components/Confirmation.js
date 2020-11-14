import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Containter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    nav {
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }
        .logo {
            float: left;
            background-color: #EC3944;
            padding: 14px 16px;
        }
        .logo a {
            text-decoration: none;
            color: white;
            font-weight: bold;
        }        
    }
`
const ConfirmationDetails = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    border: black 3px solid;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    width: auto;
    width: 40rem;
    height: 30rem;

    h2 {
        text-align:center;
    }
    .gluten {
        font-style: italic;
    }
    .orderReady {
        text-align: center;
        font-weight: bold;
    }
`

const Confirmation = (order) => {
        const lowTime = new Date(new Date().getTime() + 30*60*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        const highTime = new Date(new Date().getTime() + 45*60*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        return (
            <Containter>
                <nav>
                    <ul>
                        <li className='logo'><Link to={'/'}>Lambda Eats</Link></li>
                    </ul>
                </nav>

                <ConfirmationDetails>
                    <h2>Order Confirmation</h2>
                    <p>Name: {order.values.name}</p>
                    <p>{order.values.size} Pizza:</p>
                    <div>
                        <p>{order.values.pepperoni ? '• Pepperoni' : ''}</p>
                        <p>{order.values.onion ? '• Onion' : ''}</p>
                        <p>{order.values.greenPepper ? '• Green Pepper' : ''}</p>
                        <p>{order.values.tomatoes ? '• Tomatoes' : ''}</p>
                        <p className='gluten'>{order.values.glutenFree ? 'Gluten Free Crust Substituted' : ''}</p>
                    </div>
                    <p>Additional Instructions: {order.values.instructions}</p>
                    <p className='orderReady'>Order ready between {lowTime} and {highTime}</p>
                </ConfirmationDetails>
            </Containter>
        )
}

export default Confirmation