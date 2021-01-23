import React, { useState } from "react";

//imported router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



//imported components
import HomePage from './HomePage'

const App = () => {
  //state for data that is gathered from the order form
  const [form, setForm] = useState([])




  return (
    <Router>
      
      <Route path='/order'>
        
      </Route>
      
      
      <Route exact path='/'> 
        <HomePage/>
      </Route> 
    </Router>
  );
};
export default App;
