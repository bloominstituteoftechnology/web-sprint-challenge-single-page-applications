import React from "react";
import Form from './components/Form'
import Homepage from './components/homepage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
      <Link to="/"><h1>Lambda Eats</h1></Link>
      
      </nav>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/pizza" component={Form} />

      
      
    </>
  );
};
export default App;