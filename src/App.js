import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Header } from "./Forms/Header";
import Form from "./Forms/Form";
import Formmenu from "./Forms/Formmenu";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  const [eats, setEats] = useState([]);
  return (
    <div className="App">
     {/* <Header />*/}
      <Router>
        <Switch>
          <Route exact path="/">
            <Form Form={Form} />
          </Route>
          <Route path="/Formmenu/:id">
            <Formmenu Formmenu={Formmenu} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
