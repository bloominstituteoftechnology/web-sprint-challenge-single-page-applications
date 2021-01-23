
import React from "react";
//import Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import components
import HomePage from './components/HomePage';
import PizzaForm from './components/PizzaForm';
import ConfirmPage from './components/ConfirmPage';

//Here in App we are just containing our routing to our components and rendering them
//Step 1. In the App.js --> wrap the entire return statement of App in <Router> tags for routing to work
//Step2. Make sure you import all your components!

const App = () => {
  return (
    <>
      <h1>Winterfell Eats</h1>
        <div>
          <Router>
            <Switch> 

              <Route exact path={'/'}> {/*Exact path, so it flows down correctly */}
                <HomePage /> 
              </Route>

              <Route path={'/pizza'}>
                <PizzaForm />
              </Route>

              <Route path={'/confirmation'}>
                <ConfirmPage />
              </Route>

            </Switch>
          </Router>
        </div>
    </>
  );
};
export default App;
