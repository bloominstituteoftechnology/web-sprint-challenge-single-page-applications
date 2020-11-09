import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <>
    <div>
        <nav>
            <h1>Lambda Eats</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/pizza">Pizza</Link>
            </div>
        </nav>
        <Switch>
            <Route exact path="/" component={Home}/>     
            <Route path="/pizza" component={Pizza}/>
        </Switch>  
    
    </div>

   
      
    </>
  );
};
export default App;
