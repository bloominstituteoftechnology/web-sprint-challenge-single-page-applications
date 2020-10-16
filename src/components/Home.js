import React from 'react';
import HomeStyle from './HomeStyle'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <HomeStyle>
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
                <h2> Welcome to Lambda Eats </h2>
                </div>
                <div className='TextParagraph'>
                <p>Here at Lambda Eats we are determined to get your food to you. Our pride comes from<br /> delivering orders safely, efficiently and on time! Never waste another minute waiting on what's<br /> yours. Give us a call or head over to our <span>form page</span> to place your order now.</p>
                </div>
            </div>
        </HomeStyle>
    );
  };
  export default HomePage;
