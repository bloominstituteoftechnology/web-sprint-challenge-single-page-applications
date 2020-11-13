import React from "react";
import {useState, useEffect} from 'react';
import axios from "./axios";
import uuid from 'uuidv4';
// ROUTE IMPORTS
import {Link, Route, Switch} from 'react-router-dom';
// COMPONENT IMPORTS
import Home from './Components/Home';
import Pizza from './Components/Pizza';
import Checkout from './Components/Checkout';
// TOPPINGS IMPORT
import pizzaBuilder from './Data/pizzaBuilder';
// ORDERS IMPORT
import orders from './axios/index'; 

// SET INITIAL VALUES
const initialOrderValues = { 
    orderId : ''
  , name : ''
  , email : ''
  , phoneNumber: ''
  , size : ''
  , pepperoni : false
  , sausage : false
  , canadianBacon : false
  , spicyItalianSausage : false
  , grilledChicken : false
  , onions : false
  , greenPepper : false
  , diicedTomatoes : false
  , blackOlives : false
  , roastedGarlic : false
  , artichokeHearts : false
  , threeCheese : false
  , pineapple : false
  , extraCheese : false
  , glutenFree : false
  , specialIntructions : ''
}
const initialFormErrors = { 

}
const initialOrders = [];
const initialDisabled = true; 

// GET TOPPINGS FUNCTION
// function fetchToppings() { 
//   return Promise.resolve({success: true, pizzaBuilder})
// }

export default function App(props){
  // SLICES OF STATE
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialOrderValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // GET ORDERS
  const getOrders = () => 
  { 
    axios
      .get('orders')
      .then(res => 
        { 
          setOrders(res.data);
        })
      .catch((err) => 
      { 
        console.error(err);
        debugger;
      })
  }

  // POST NEW ORDER
  const postNewOrder = (newOrder) => { 
    axios
      .post('orders', newOrder)
      .then((res) => 
        { 
          setOrders([...res.data, ...orders]);
          setFormValues(initialOrderValues);
        })
      .catch((err) => 
      { 
        console.error(err);
        debugger;
      })
  }

  getOrders();
  // CHANGE INPUT
  const onChange = () => 
  { 

  }
  // SUBMIT FORM
  const onSubmit = () => 
  { 
    const newOrder = { 
      name: formValues.name.trim()
    , email: formValues.email.trim()
    , phoneNumber: formValues.phoneNumber.trim()
    , size: formValues.size.trim()
    , toppings: ['pepperoni', 'sausage', 'canadianBacon', 'spicyItalianSausage', 'grilledChicken', 'onions', 'greenPepper', 'dicedTomatoes', 'blackOlives', 'roastedGarlic', 'artichokeHearts', 'threeCheese', 'pineapple', 'extraCheese'].filter((top) => formValues[top])
    , glutenFree: formValues.glutenFree.trim()
    , specialIntructions: formValues.specialIntructions.trim()
    }
    postNewOrder(newOrder);
  }

  // VALIDATE SCHEMA

  return (
     <div className="App"> 
      <nav>
        <h1 className="restaruant-header">Lambda Eats</h1>
        <div className="nav-links"> 
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Our Pizza's</Link>
        </div>
      </nav>

      <Switch>
        {/* ORDER PAGE */}
        <Route path="/pizza"> 
          <Pizza 
            values={null}
            change={onChange}
            submit={onSubmit}
            disabled={disabled}
            errors={formErrors}
            />
        </Route>

        {/* CHECKOUT PAGE */}
        
        {/* HOME */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
     </div>
  );
};

  // SET TOPPING OPTIONS
  // useEffect(() => {
  //   setToppings(pizzaBuilder);
  //   return () => {
  //   }
  // }, [toppings])