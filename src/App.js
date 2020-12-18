import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div className="App">
        <nav>
          <h1 className="store-header"> Lambda Eats</h1>
          <div className="nav-links">
           <Route exact path="/home" component={Home}/>
           <Route exact path="/shop" component={Shop}/>
           
          </div>
        </nav>
        
      </div>
    </>
  );
};
export default App;
