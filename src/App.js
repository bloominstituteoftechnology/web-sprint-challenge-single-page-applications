import React from "react";
import HomePage from "./Home";
import Form from "./pizza";
import Confirm from "./confirm";
import {Route,Link} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>   
      

      <h3>
        Computers make the best pizza! 
      </h3>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/pizza'>Order</Link></li>
        <li><Link to='/confirm'>Cart</Link></li>
      </ul>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/pizza' component={Form}/>
    <Route exact path='/confirm' component={Confirm}/>


    </div>
    
  );
};
export default App;
