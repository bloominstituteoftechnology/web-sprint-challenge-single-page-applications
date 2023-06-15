import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home'
import OrderPizza from "./components/OrderPizza";
import axios from "./axios";

//step 2
const initalPizzaForm = {
  //dropdown
  size: '',
  //radio botton
  sauce: '',
  // checkbox
  'Pepperoni': false,
  'Canadian Bacon': false, 
  'Grilled Chiken': false,
  'Green Pepper': false,
  'Black Olives': false,
  'Artichoke Hearts': false,
  'Pinepple': false,
  'Sausage': false,
  'Spicy Italian Sausage': false,
  'Onions': false,
  'Diced Tomatos': false,
  'Roasted Garlic': false,
  'Three Cheese': false,
  'Extra Cheese': false,
  //textinput
  specialInstc: '', 
  firstName: '',
  email: '',
  streetName: '',
  city: '',
  zipcode: '',
  numberOfOrder: '',
}

const App = () => {
  //step 3 
  const [pizzaOrder, setPizzaOrder] = useState([]);
  const [pizzaForm, setPizzaForm] = useState(initalPizzaForm);
  const [disabled, setDisabled] = useState(true);

  //step 4
useEffect(() => {
  axios.get('fakeapi.com')
    .then(res => console.log(res))
    .catch(err => console.error(err))
}, [])

  return (
   <div className="App">
      <nav className="Nav">
        <h1 className="store-header">Pizza Eatery</h1>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="order-pizza">Order</Link>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='order-pizza' element={<OrderPizza />}/>
        </Routes>


   </div>
  );
};
export default App;
