import React from "react";
import { Router, Switch, Route } from "react-router-dom";


// NavBar
import NavBar from './components/Navbar'
// Pages
import HomePage from "./pages/Homepage";
import Formpage from "./pages/Formpage";
import Success from "./pages/SuccessOrder"
// history
import History from './components/History'

const App = () => {
  return (
    <>
      <Router history={History}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pizza" component={Formpage} />
          <Route path="/success" component={Success} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
