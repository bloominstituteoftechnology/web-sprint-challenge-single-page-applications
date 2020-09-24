import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
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
      <Router>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='./Form'>Order</Link>
          <Link to='./Pizza'>Confirmation</Link>
        </div>  
        <Switch>
          <Route path='/Form'>
            <Form />
          </Route>
          <Route path='/Confirmation'>
            <ConfirmationPage />
          </Route>  
        </Switch>
      </Router>
        <img src="https://pngimage.net/wp-content/uploads/2018/06/pizza-grande-png-1.png" />
        <br />
        <p>Pizza ipsum dolor amet bacon pineapple sauteed onions, Chicago style bbq sauce black olives buffalo sauce marinara. Hand tossed spinach buffalo sauce meatball, Pepperoni string cheese pineapple. Lasagna extra sauce banana peppers extra cheese, spinach stuffed ranch meatball deep crust personal pan anchovies chicken and bacon.</p>
        <br />
        <p> Ranch stuffed crust string cheese meatball, pepperoni onions mozzarella. Pepperoni extra cheese thin crust large party. Pepperoni bbq rib deep crust parmesan chicken wing onions white pizza bacon & tomato bbq sauce pepperoni extra cheese sausage. Marinara NY style peppers chicken wing green bell peppers sausage fresh tomatoes extra sauce mushrooms extra cheese bacon pie steak.</p>
        <br />
        <p>Extra sauce buffalo sauce chicken wing black olives bbq rib white garlic extra cheese Chicago style. String cheese green bell peppers burnt mouth mayo chicken wing Chicago style deep crust marinara anchovies onions hawaiian peppers. Chicken wing hawaiian melted cheese garlic ricotta platter string cheese white garlic garlic sauce, hand tossed thin crust. Beef stuffed crust marinara melted cheese philly chicken chicken meatball buffalo sauce white pizza.</p>
        <br />
      <Footer />
    </StyledDiv>
  );
};


const StyledDiv = styled.div `
  .links > a {
    color: greenyellow;
  }


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

const StyledForm = styled.form `
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* opacity: 75%; */
  border-radius: 15px;
  box-shadow: 5px 5px 5px whitesmoke;
  text-align: center;
}

.info > input, .specialIns{
  border-radius: 15px;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  width: 300px;
  background-color: white;
  color: black;
  text-shadow: 2px 2px greenyellow;
  text-align: center;
  &:hover{
      background-color: slategrey;
      color: greenyellow;
      cursor: pointer;
  }
  &:focus {
      border: gray;
      outline: none;
      }
  &:active {
      border: gray;
      outline: none;
  }
}

.size, button {
  border-radius: 15px;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  width: 150px;
  background-color:greenyellow;
  color: black;
  text-align:center;
  &:hover{
      background-color: slategrey;
      color: greenyellow;
      cursor: pointer;
  }
  &:focus {
      border: gray;
      outline: none;
      }
  &:active {
      border: gray;
      outline: none;
  }
}

/* .specialIns {
  width: 500px;
  color: black; 
} */

span {
  font-style: italic;
  text-shadow: 2px 2px 2px darkgray;
}
`
export default App;
