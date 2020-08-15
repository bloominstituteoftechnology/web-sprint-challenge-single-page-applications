import React, { useState } from "react";
import data from "./data"
import "./App.css";
import { Link, Route, Switch } from 'react-router-dom'


const App = () => {

  const [restaurants, setRestaurants] = useState(data)
  return (
    <div className="App">
      <nav>
      <h1 className="store-header">Lambda Eats</h1>
     
      <img src="https://img.huffingtonpost.com/asset/5aa8034f1e00008e0b7ae8a7.jpeg?cache=UKM6vN10o1&ops=scalefit_720_noupscale"></img>
      <p>You can remove this code and create your own header</p>
      <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </div>
    </nav>
    <Switch>
    <Route path="/shop/:food">
    <Item items={restaurants} />
    </Route>

    <Route path="/" render={(props) =>{
      console.log('react router props', props)
      return <RestaurantList history={props.history} items={restaurants}/>
    }}/>

    <Route path ="/" component={Home}/>
    </Switch>

    </div>
  );
};
export default App;
