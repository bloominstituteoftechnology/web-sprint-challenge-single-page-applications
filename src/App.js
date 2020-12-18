import Home from "./components/stateless/Home.jsx";
import OrderForm from "./components/stateless/OrderForm";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Confirm from "./components/stateless/Confirm.jsx";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/OrderForm" component={OrderForm} />
        <Route path="/Confirm" component={Confirm} />
      </Switch>
    </>
  );
};
export default App;
