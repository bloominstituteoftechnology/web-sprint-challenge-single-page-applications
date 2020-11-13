import React from "react";
import styled from 'styled-components';
import {Button} from 'reactstrap';

const App = () => {
  return (
    <>
      {/* Render the site header */}
      <StyledHeader>
      <header className='site-header'>
        <h1 className='app-name'>Lambda Eats</h1>
        <div className='navigation-toggle'>
          <Button className='navigation-button' color='secondary'> Home </Button>
          <Button className='navigation-button' color='secondary'> Help </Button>
        </div>
      </header>
      </StyledHeader>
      
      {/* Render the Home component  */}
      <Home />
      {/* Render the Pizza component */}
      <Pizza />
      {/* Render the Result component */}
      <Result />
    </>
  );
};
export default App;

const StyledHeader = styled.header `
display: flex;
flex-flow: row;
justify-content: center;
border: 1px solid red;

  .site-header {
    border: blue 1px dashed;
    min-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .app-name {
    padding-left: 10px;
  }
  .navigation-toggle {
    padding-right: 10px;
  }
  .navigation-button {
  margin: 1px;
}
`