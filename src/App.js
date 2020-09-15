import React from "react";
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import McDonald from './component/pages/McDonald';
import Starbucks from './component/pages/Starbucks';
import Pizza from './component/pages/Pizza';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
     <Router>   
       <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mcdonald' component={McDonald}/>
        <Route path='/starbucks' component={Starbucks}/>
        <Route path='/pizza' component={Pizza}/>
      </Switch>

      </Router>
    </>
  );
}
export default App;
