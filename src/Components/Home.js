import React from 'react';
import { NavLink } from 'react-router-dom';
import pizza from '../Images/Pizza.jpg';
import styled from 'styled-components';

const PizzaImg = styled.img`
  margin-left: 0%;
  width: 100%;
`;

// Just used for displayinh the image and navlink
function Home() {
  return (
    <header>
      <nav>
        <div className='titleDiv'>
          <h1>Lambda Eats</h1>
          <PizzaImg src={pizza} alt='pizza-banner' />
          <NavLink to={'/'}></NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Home;
