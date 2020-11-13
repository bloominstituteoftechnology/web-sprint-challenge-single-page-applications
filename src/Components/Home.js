import React from 'react';
import styled from 'styled-components';
import Pizza from './Pizza'

import {Button} from 'reactstrap';

export default function Home (props) {

return (

    // Render the Pizza component 
    <> 
        <StyledBanner>
            <div className='image-wrapper'> 
                <img className='banner-logo' src='https://i0.wp.com/pointofsale.com/wp-content/uploads/2020/05/DOORDASH-LOGO-01.png?w=2084&ssl=1' alt='doordash'/> 
            </div>
            <p> Place a quick order from the nearest restaurant </p>
            <div className='buttons-container'>
                <Button color='primary' className='quick-order' id='pizza'> Pizza </Button>
                <Button color='primary' className='quick-order' id='burger'> Burger </Button>
                <Button color='primary' className='quick-order' id='shawerma'> Shawerma </Button>
            </div>
        </StyledBanner>
        <Pizza /> 
    </>
        
)

};

const StyledBanner =styled.div `
/* border: green 2px dashed; */
margin-top: 20px;    
max-width: 100%;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;

    .image-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 40%;
        border: green 5px solid;
    }
    .banner-logo{
        max-width: 100%;
    }
    .buttons-container {
        display: flex;
        min-width: 40%;
        border: yellow solid 1px;
        justify-content: space-between;
    }
    .quick-order{
        min-width: 100px;
    }
    p{
        margin-top: 10px;
        border: red 2px dashed;
    }
`