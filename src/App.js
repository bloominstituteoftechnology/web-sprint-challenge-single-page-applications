import React, { useState } from "react";
import styled from 'styled-components';
import {Button} from 'reactstrap';
import Home from './Components/Home'
import Pizza from "./Components/Pizza";
import Restaurants from "./Components/Restaurants";
import Axios from "axios";



const App = () => {
  ////STATES
  //Initial form state
  const [initialForm, setinitialForm] = useState(
    {

    }
  );

  //State for the list of restaurants that show up
  const [restaurants, setRestaurants] = useState([]);

  return (
    <>
      {/* Render the site header */}
      <StyledHeader>
      <header className='site-header'>
        <div className='small-logo-wrapper'>
          <img className='small-logo' src='https://cdn-images-1.medium.com/max/1200/1*FDrBVMKrgMelXTzOudJ-xw.jpeg' alt='small-logo' />
        </div>
        <h1 className='app-name'>DoorDash Concierge</h1>
        <div className='navigation-toggle'>
          <Button className='navigation-button' color='secondary'> Home </Button>
          <Button className='navigation-button' color='secondary'> Help </Button>
        </div>
      </header>
      </StyledHeader>
      
      {/* Render the Home component  */}
      <div>
        <Home />
        <Restaurants />
      </div>
      
    </>
  );
};
export default App;


////STYLING FOR STUFF IN APP.JS
const StyledHeader = styled.header `
display: flex;
flex-flow: row;
justify-content: center;
/* border: 1px solid red; */
  .site-header {
    /* border: blue 1px dashed; */
    min-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .app-name {
    /* padding-left: 10px; */

  }
  .navigation-toggle {
    padding-right: 10px;
  }
  .small-logo-wrapper {
    max-width: 10%;
    max-height: 50%;
    /* border: green solid 3px; */
  }
  .small-logo {
    max-width: 50%;
    /* border: green solid 3px; */
  }
  .navigation-button{
    margin-left: 2px;
  }
  
`