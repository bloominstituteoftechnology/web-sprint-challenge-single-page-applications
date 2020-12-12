import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Home from './AppComponents/Home';
import PizzaForm from './AppComponents/PizzaForm';
import HeaderNav from './HeaderNav';

const App = () => {
  return (
    <>
      <Router>
        <HeaderNav />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pizza" component={PizzaForm} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
