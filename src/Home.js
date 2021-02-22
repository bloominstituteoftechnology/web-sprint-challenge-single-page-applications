import React from 'react';
import StyledHome from './StyledHome'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <StyledHome>
            <div className='HeaderContainer'>
            <div className='Logo'>
                <h1>Lambda Eats</h1>
            </div>
            <div className='Navigation'>
                <Link to='/'>
                  Home
                </Link>
                <Link to='/Pizza'>
                  Form
                </Link>
            </div>
            </div>
            <div className='TextContainer'>
                <div className='TextTitle'>
                <h2> Welcome to Lambda Eats! </h2>
                </div>
                <div className='TextParagraph'>
                <p>Where you can enjoy developing your own pizza while you code.<br /> We promise to hand create each pizza with love and gloves! For you're safety <br /> and ours. Head on over to our <span>form page</span> to place your order now. We appreciate your business!</p>
                </div>
            </div>
        </StyledHome>
    );
  };
  export default HomePage;