import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Help from './components/Help';
import Form from './components/Form';

const App = () => {
  return (
    <div className='app'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/help'>Help</Link>
        </div>
      </nav>
      <Switch>
        <Route path='/pizza' component={Form} />
        <Route path='/help' component={Help} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
};
export default App;
