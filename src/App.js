import React from "react";
import Form from './components/Form'
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/Pizza' component={Form} />
          </Switch>  
    </>
  );
};
export default App;
