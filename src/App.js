import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './components/Form';
import Home from './Components/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar'>
          <Link>
            <button name='home'>Home</button>
          </Link>
          <Link to='/form'>Order</Link>
        </nav>
      </div>
      <div className='App-header'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/form' component={Form} />
          <Route
            path='/order'
            render={(props) => {
              return null;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
