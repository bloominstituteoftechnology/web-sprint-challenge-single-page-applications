import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Pizza from './Form/Form'
import Congrats from './Congrats'

const App = () => {
  const [pizzaData, setPizzaData] = useState(false)
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pizza'>
          <Pizza pizzaData={pizzaData} setPizzaData={setPizzaData}/>
        </Route>
        <Route path='/congrats'>
          <Congrats pizzaData={pizzaData}/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;