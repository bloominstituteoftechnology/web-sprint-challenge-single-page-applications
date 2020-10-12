import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './Components/Form';
import home from './Components/Home';

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
          <Route exact path='/' component={home} />
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
