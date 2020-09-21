import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Form from "./components/Form";

const App = () => {
  return (
    <>
    <NavBar />
      <Switch>
        <Route path="/pizza">
        <Form />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
