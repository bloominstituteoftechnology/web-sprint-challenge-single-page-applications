import React, {useState} from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import ConfirmationPage from './Confirmation'
import styled from 'styled-components'

const App = () => {
  return (
    <StyledDiv>
      <Header />
        <img src="https://pngimage.net/wp-content/uploads/2018/06/pizza-grande-png-1.png" />
        <br />
        <p>Pizza ipsum dolor amet bacon pineapple sauteed onions, Chicago style bbq sauce black olives buffalo sauce marinara. Hand tossed spinach buffalo sauce meatball, Pepperoni string cheese pineapple. Lasagna extra sauce banana peppers extra cheese, spinach stuffed ranch meatball deep crust personal pan anchovies chicken and bacon.</p>
        <br />
        <p> Ranch stuffed crust string cheese meatball, pepperoni onions mozzarella. Pepperoni extra cheese thin crust large party. Pepperoni bbq rib deep crust parmesan chicken wing onions white pizza bacon & tomato bbq sauce pepperoni extra cheese sausage. Marinara NY style peppers chicken wing green bell peppers sausage fresh tomatoes extra sauce mushrooms extra cheese bacon pie steak.</p>
        <br />
        <p>Extra sauce buffalo sauce chicken wing black olives bbq rib white garlic extra cheese Chicago style. String cheese green bell peppers burnt mouth mayo chicken wing Chicago style deep crust marinara anchovies onions hawaiian peppers. Chicken wing hawaiian melted cheese garlic ricotta platter string cheese white garlic garlic sauce, hand tossed thin crust. Beef stuffed crust marinara melted cheese philly chicken chicken meatball buffalo sauce white pizza.</p>
        <br />
      <Form />
      <ConfirmationPage />
      <Footer />
    </StyledDiv>
  );
};


const StyledDiv = styled.div `
  color: greenyellow;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* opacity: 75%; */
    border-radius: 15px;
    box-shadow: 5px 5px 5px whitesmoke;
    text-align: center;
}

p {
  margin: 0 auto;
  width: 55%;
  text-align: center;
  text-justify: center;

}
`
export default App;
