import Home from "./components/stateless/Home.jsx";
import OrderForm from "./components/stateless/OrderForm";
import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/OrderForm" component={OrderForm} />
      </Switch>
    </>
  );
};
export default App;
