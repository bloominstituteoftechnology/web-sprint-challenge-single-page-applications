import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from "./layout/Home";


const App = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default App;
