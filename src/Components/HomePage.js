import React from 'react';
import styled from 'styled-components';
import pizzaSplash from '../Images/Pizza.jpg';
import {Link} from 'react-router-dom';
import OrderCard from './OrderCard';
import { array } from 'yup';

const Home = props => {
    let newOrders = props.orders.concat([])
    return(
            <HomeContainer>
                <header>
                    <h1>You Build It, You Eat It!</h1>
                    <Link className='a' to='/buildapizza'>Build Your Pizza</Link>
                    {newOrders.map((order, i) => <OrderCard key={i} order={order}/>)}
                </header>
                
            </HomeContainer>
    );
}

const HomeContainer = styled.div`

    header{
        width: 100%;
        height: 100vh;
        background-image: url(${pizzaSplash});
        background-size: cover;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;
        
        h1{
            color: white;
            margin-top: 5rem;
            font-size: 3.6rem;
            backdrop-filter: brightness(40%);
            border-radius: 15px;
            padding: 1rem;
        } 
    }
    a{  
        margin-top: 1rem;
        text-decoration: none;
        font-size: 2.4rem;
        padding: 1rem;
        border: 3px solid white;
        color: white;
        background-color: black 
    }
`


export default Home;