import React from "react";
import { NavLink, Route } from "react-router-dom";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="header">
      <h1>Lambda Eats</h1>
      <nav>
        <a>Home</a>
        <a>Help</a>
      </nav>
      </div>
      <HomePage />
      <Form />
    </>
  );
};
export default App;
