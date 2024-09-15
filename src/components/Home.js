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
 65  src/components/HomeP.js 
Viewed
@@ -0,0 +1,65 @@
import Styled from 'styled-components';

const HomeP = Styled.div`
.HeaderContainer {
    background-color: black;
    color: white;
    padding: 0;
    margin: 0;
    height: 12vh;
    display: flex;
    justify-content: space-evenly;
}
.Logo {
    width: 50%;
    h1 {
        margin: 0;
        padding-top: 4%;
        padding-left: 4%;
    }
}
.Navigation {
    display: flex;
    justify-content: center;
    width: 50%;
    margin-top: 2%;
    a {
        text-decoration: none;
        color: white;
        padding-top: 3%;
        padding-right: 3%;
        padding-left: 3%;
        font-weight: 600;
        &:hover {
            border-radius: 100px;
            border-bottom: 100px solid white;
            border-top: 1px solid white;
            background-color: white;
            color: black;
            font-weight: 700;
        }
    }
}
.TextContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.TextTitle {
    font-size: 2rem;
    padding-top: 6%;
}
.TextParagraph {
    font-weight: 600;
    text-align: center;
    span {
        color: blue;
        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
    }
}
`;

export default HomeP; 