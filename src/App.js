import React from "react";
import HomePage from './HomePage'
import Form from './Form'
import {Route, BrowserRouter as Router, Link } from 'react-router-dom'



const App = () => {





  return (
   <div className= 'App'>
     <header className= 'App-header'>
            <Router exact path ="/">
              <Link to = '/'>Home</Link>
              <Link to= '/pizza'> Pizza Form</Link>
              
             

             <Route exact path ='/' component={HomePage}/>
             <Route exact path ='/pizza' component={Form}/>
            </Router>
        </header>
       </div>
  );
};
export default App;
