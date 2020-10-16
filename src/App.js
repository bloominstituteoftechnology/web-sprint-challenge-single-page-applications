import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'; 
import Home from './components/Home';
import Form from './components/Form';
import './App.css';


const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <nav className="navigation">
          <Link className="nav" path="/">Home</Link>
          <Link className="nav" path="/form">Pizza</Link>
        </nav>
      </header>
      <Switch>

        <Route path="/form">
          <Form />
        </Route>

        <Route path="/"> 
          <Home />
        </Route>

      </Switch>
    </>
  );
};

export default App;
