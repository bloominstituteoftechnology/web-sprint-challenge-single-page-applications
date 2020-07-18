import React, {useState} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import HomePage from './components/Home';
import '../src/App.css';
import PizzaForm from './components/Form';


const App = () => {
  const [pizzas, setPizzas] = useState([]);
  return (
    <>
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </header>
      <div className='pizza' >
            <Link className='pb' to='/pizza'>Pizza Maker</Link>
        </div>
    </div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/pizza'>
        <PizzaForm pizzas={pizzas} setPizzas={setPizzas}/>
        </Route>
      </Switch>
    </>

  );
};
export default App;
