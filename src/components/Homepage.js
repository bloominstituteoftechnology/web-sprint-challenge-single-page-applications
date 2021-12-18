import React from 'react';
import Header from './Header.js';
import  { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledHomepage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

    

    .billboard{
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: solid grey 2px;
        padding: 40px 40px
    }

    .billboard button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        padding: 10px 50px;
        

        &:hover{
            border: black solid 2px;
        }
    }


`
export default function Homepage(props){
    return(
        <>
        <StyledHomepage>
            <Header />

            <div className='billboard'>
                <h1>Your favorite food, deliverd while coding</h1>
                <Link to="/pizza">
                    <button id='order-pizza'>Pizza?</button>
                </Link>
            </div>

            <div className='deliveryOptions'>
                <h3>Food Delivery in Gotham City</h3>
            </div>
        </StyledHomepage>
        </>
    );
}