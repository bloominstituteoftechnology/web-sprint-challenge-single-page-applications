import React from 'react';
import HomeP from './HomeP'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<HomeP>
		<div className='HeaderContainer'>
		  <div className='Nav'>
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
                </div>
				</div>
		</HomeP>
	);
};

export default Home;