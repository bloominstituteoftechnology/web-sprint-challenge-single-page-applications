import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div className='app'>
      <div className='nav-links'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
     </nav> 
     </div>

      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};
export default App;
