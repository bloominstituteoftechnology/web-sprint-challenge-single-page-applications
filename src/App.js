import React from "react";
import Header from './components/header/Header';
import HomePage from './components/HomePage';
import Form from './components/form/Form';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/pizza" component={Form}/>
      </Switch>
    </>
  );
};
export default App;
