import React from "react";
import Header from "./components/Header";
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Confirmation from "./components/Confirmation";



const App = () => {
  return (
    <>
     <Header/>

     <Switch>
       
        <Route path='/pizza'>
          <Form />
        </Route>
        <Route path='/order-confirm'>
          <Confirmation/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Redirect to='home' />
      </Switch>
    </>
  );
};
export default App;
