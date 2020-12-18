import React, { useState, useEffect } from "react";
import './App.css'
import Form from './Form'
import * as yup from 'yup'
import Axios from 'axios'

function App() {
  const [pizzaValues, setPizzaValues] = useState([])
  useEffect(() => {console.log('Order Up!')}, [pizzaValues])

  return (
    <div classNam="App">
      <h1>Lambda Eats</h1>
      <p>Our Sauce is the Sauciest!</p>
    
    <Form setPizzaValues={setPizzaValues} pizzaValues={pizzaValues}/>
    
    </div>
    
  );
};
export default App;
