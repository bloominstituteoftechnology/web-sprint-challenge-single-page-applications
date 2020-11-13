import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


// NavBar
import NavBar from './components/Navbar'
// Pages
import HomePage from "./pages/Homepage";
import Formpage from "./pages/Formpage";
import Success from "./pages/SuccessOrder"

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pizzaOrder" component={Formpage} />
          <Route path="/pizzaOrder/Success" component={Success} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
