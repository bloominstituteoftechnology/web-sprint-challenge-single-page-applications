import React from 'react';
import styled from 'styled-components';
import heroBg from '../Assets/Pizza.jpg';
import { useHistory } from 'react-router-dom';

export default function HeroImg() {
  const history = useHistory();

  const routeToShop = () => {
    history.push('/order');
  };

  return (
    <StyledContainer imgUrl={process.env.PUBLIC_URL + '/Pizza.jpg'}>
      <button className='order-pizza' onClick={routeToShop}>
        Order Pizza
      </button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50vh;
  margin: 20px 0;
  background-image: url(${heroBg});

  button {
    height: 40px;
    margin: 20px;
  }
`;
