import React from "react";
import Home from "./";
import Form from "./"
import {Route, Switch} from  "react-router-dom"

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Pizza" component={Form}/>
    </Switch>
  );
};
export default App;
