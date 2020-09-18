import React from "react";
import { Switch, Route} from 'react-router-dom'
import PizzaForm from './components/form'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Home from './components/home'

const App = () => {

  return (
    <>
    <Navigation/>
     <Home/>
     <Footer/>

     <Switch>
     <Route path = '/pizzaorder'>
       <PizzaForm/>
     </Route>
     <Route path = '/'>
       <App/>
     </Route>
     </Switch>
     </>
  );
};
export default App;
