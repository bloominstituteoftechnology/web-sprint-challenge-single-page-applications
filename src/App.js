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
          <Route path="/pizza" component={Formpage} />
          <Route path="/pizza/Success" component={Success} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
