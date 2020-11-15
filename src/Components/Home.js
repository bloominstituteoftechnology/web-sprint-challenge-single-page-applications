import React from 'react';
import styled from 'styled-components';
import Pizza from './Pizza'
import Restaurants from './Restaurants';
import {Button} from 'reactstrap';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import App from '../App';

export default function Home (props) {
    ////GET THE RESTAURANT DATA TO PASS TO THE RETAURANTS COMPONENT
    //Listen to user input in the search box to get an address
    //Submit address to API through a POST request and return a list of 5 nearest
    //Make an external call to the API to get nearest restaurants



    return (
        // Render the Pizza component 
        <div> 
            <StyledBanner>
                <div className='image-wrapper'> 
                    <img className='banner-logo' src='https://i0.wp.com/pointofsale.com/wp-content/uploads/2020/05/DOORDASH-LOGO-01.png?w=2084&ssl=1' alt='doordash'/> 
                </div>
                <p> Place a quick order from the nearest restaurant </p>
                <Router>
                    <Link to='/pizza'>
                        <div className='buttons-container'>
                        <Button color='primary' className='quick-order' id='pizza'> Pizza </Button>
                        </div>
                    </Link>
                    <Route path='/pizza' component={Pizza}></Route>
                </Router>
            </StyledBanner>
            
            <Restaurants />
        </div>
            
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
    }
    .banner-logo{
        max-width: 100%;
    }
    .buttons-container {
        display: flex;
        min-width: 40%;
        justify-content: center;
    }
    .quick-order{
        min-width: 100px;
    }
    p{
        margin-top: 10px;
    }
`