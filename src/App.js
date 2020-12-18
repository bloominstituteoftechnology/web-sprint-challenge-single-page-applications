import Home from "./components/stateless/Home.jsx";
import OrderForm from "./components/stateless/OrderForm";
import React from "react";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Home />
      <Route exact path="/" component={Home} />
      <Route path="/OrderForm" component={OrderForm} />
    </>
  );
};
export default App;
