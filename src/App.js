import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from "./layout/Home";
import NewPizza from "./layout/NewPizza";
import NoMatch from "./layout/NoMatch";


const App = () => {
  return (
    <Switch>
      <Route path="/new-pizza">
        <NewPizza />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};
export default App;
