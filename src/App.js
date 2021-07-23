import React from "react";
import Header from "./components/Header";
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'



const App = () => {
  return (
    <>
     <Header/>

     <Switch>
       
        <Route path='/pizza'>
          <Form />
        </Route>
        <Route path='/confirmation'>
          
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
