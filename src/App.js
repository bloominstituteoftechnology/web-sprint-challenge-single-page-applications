import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home'
import OrderPizza from "./components/OrderPizza";
import axios from "./axios";

const intialPizzaValue = 
  {
    //dropdown
    size: 'Small',
    //radio botton
    sauce: '',
    // checkbox
    pepperoni: false,
    canadianBacon: false, 
    grilledChiken: false,
    greenPepper: false,
    blackOlives: false,
    artichokeHearts: false,
    pinepple: false,
    sausage: false,
    spicyItalianSausage: false,
    onions: false,
    dicedTomatos: false,
    roastedGarlic: false,
    threeCheese: false,
    extraCheese: false,
    //textinput
    specialInstc: '', 
    name: '',
    streetName: '',
    city: '',
    zipcode: '',
    email: '',
    numberOfOrder: 1,
  }

const App = () => {
  //step 3 
  const [pizzaOrder, setPizzaOrder] = useState([]);
  const [pizzaFormValues, setPizzaFormValues] = useState(intialPizzaValue);
  const [disabled, setDisabled] = useState(true);
    
  const handleIncrement = () => {
    setPizzaFormValues((prevFormValues) => ({
      ...prevFormValues,
      numberOfOrder: prevFormValues.numberOfOrder + 1,
    }));
  };
  
  const handleDecrement = () => {
    if (pizzaFormValues.numberOfOrder > 1) {
      setPizzaFormValues((prevFormValues) => ({
        ...prevFormValues,
        numberOfOrder: prevFormValues.numberOfOrder - 1,
      }));
    }
  };

  //step 4
useEffect(() => {
  axios.get('fakeapi.com')
    .then(res => setPizzaOrder(res.data))
    .catch(err => console.error(err))
}, [])

//step 5 (just function with parms)
const inputChange = (input, value) => {
  setPizzaFormValues({...pizzaFormValues, [input]: value})
}


// step 6 declared new object with function and set state for new object. 
const formSubmit = () => {
  const newPizzaOrder = {
    size: pizzaFormValues.size,
    sauce: pizzaFormValues.sauce,
    specialInstc: pizzaFormValues.specialInstc,
    name: pizzaFormValues.name,
    streetName: pizzaFormValues.streetName,
    city: pizzaFormValues.city,
    zipcode: pizzaFormValues.zipcode,
    email: pizzaFormValues.email,
    numberOfOrder: pizzaFormValues.numberOfOrder,
    toppings: [  
      'pepperoni', 
      'canadianBacon', 
      'grilledChiken', 
      'greenPepper', 
      'blackOlives', 
      'artichokeHearts', 
      'pinepple', 
      'sausage', 
      'spicyItalianSausage',
      'onions',
      'dicedTomatos',
      'roastedGarlic',
      'threeCheese',
      'extraCheese'].filter(topping => !!pizzaFormValues[topping])
  }
  postNewOrder(newPizzaOrder);
}

// step 7
const postNewOrder = (newPizzaOrder) => {
    axios.post('https://reqres.in/api/orders', newPizzaOrder)
      .then(res => {
        setPizzaOrder([res.data, ...pizzaOrder]);
        setPizzaFormValues(intialPizzaValue);

      })
      .catch(err => console.error(err))
}

  return (
   <div className="App">
      <nav className="Nav">
        <h1 className="store-header">Pizza Eatery</h1>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="pizza">Order</Link>
        </div>
      </nav>

        {/* changes suggested by LA to use exact path statement, review further */}
          {/* <Route exact path='/' element={<Home />}/>
          <Route path='/pizza' element={
            <OrderPizza 
              values={pizzaFormValues} 
              change={inputChange} 
              submit={formSubmit} 
              disabled={disabled} 
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              pizzaOrder={pizzaOrder}
            />
          }/> */}

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='pizza' element={
            <OrderPizza 
              values={pizzaFormValues} 
              change={inputChange} 
              submit={formSubmit} 
              disabled={disabled} 
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              pizzaOrder={pizzaOrder}
            />}/>
        </Routes>
   </div>
  );
};
export default App;