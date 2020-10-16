import React from "react";
import FormPage from './components/Form'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/Pizza' component={FormPage} />
          </Switch>
          </>
  );
};
export default App;

// This will be the home page