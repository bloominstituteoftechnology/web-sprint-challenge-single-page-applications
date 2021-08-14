import React from "react";
import "./index.css";
import Pizza from './Pizza';
import Home from './Home'
import Confirmation from './Confirmation';

import {Route, Link, Switch } from 'react-router-dom';



const App = () => {
  return (
    <div className="App">
     <header className="App-header">
        <h1 className="App-title">Pizza Delivery</h1>
  
        {/* <Link to='/'>Home</Link> */}
    <Link to='Confirmation'></Link>

 <Switch>
     <Route exact path='/' component={Home} />
     <Route path='/Pizza' component={Pizza} />
     <Route path='/Confirmation' component={Confirmation} />
 </Switch>


   </header>
 </div>
  );
};

export default App;

// In 1-2 sentences, explain what React's useRouteMatch hook is used for. Route match is used to determine which component to render when a route is matched.
// How would you explain form validation to someone who has never programmed before? form validation is a feature that allows you to validate user input.
// In 1-2 sentences, define end to end testing. e2e testing is a testing method that tests your application from start to finish.

