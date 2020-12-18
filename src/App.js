import React from "react";
import { Navbar } from "./components/Navbar";
import {Form} from './components/Form'
import {Home} from './components/Home'
import {Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/pizza'>
            <Form />
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;