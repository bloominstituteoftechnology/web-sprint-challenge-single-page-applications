import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from "./components/HomePage";
import OrderForm from "./components/Form";


const App = () => {
  return (
    <>
      <HomePage />
      <OrderForm />
    </>
  );
};
export default App;
