import React from "react";
import { NavLink, Route } from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Form />
    </div>
  );
};
export default App;
