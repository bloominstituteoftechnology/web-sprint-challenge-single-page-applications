import React from "react";
import { Switch, Route, Link} from 'react-router-dom'
import PizzaForm from './components/form'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Home from './components/home'

const App = () => {


  return (
<div>
  <Navigation/>
  <Switch>
    <Route path = '/pizza'>
      <PizzaForm/>
    </Route>

    <Route path = '/'>
      <Home/>
    </Route>
  </Switch>
  <Footer/>
 </div> 
  );
};
export default App;
