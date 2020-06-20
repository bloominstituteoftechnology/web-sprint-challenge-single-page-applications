import React from "react";
import Form from "./Form";
import Confirmation from "./Confirmation";
import { Route, Link} from "react-router-dom";
import Home from './Home';

const App = () => {
  return (
    <div className="App">
      
      <div className="routeBtns">
        <h1 className="lambdaEats">Lambda Eats</h1>
        <Link to="/"><button className="btn1">Home</button></Link>
        <button className="btn2">Help</button>
      </div>


      
      <Route exact path="/pizza">
        <Form />
      </Route>

      <Route exact path="/pizza/confirmation">
        <Confirmation />
      </Route>
      <Route exact path="/"><Home /></Route>
      
    </div>
  );
};
export default App;
