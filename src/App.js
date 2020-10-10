import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Form from "./Form/Form";
const App = () => {
  return (
    <Route path="/pizza" >
      <h1>Lambda Eats</h1>
      <Form />
    </Route>
  );
};
export default App;
