import React from "react";
import Form from "./Form"
import Home from "./Home"
import { Link, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <nav>
      <h1 className="store-header">Crackin The Code Pizza</h1>
      <div className="nav-links">
        <Link to ="/">Home</Link>
        <Link to="/form">Order Now</Link>
      </div>
    </nav>

    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/Form">
      <Form />
    </Route>
      
    </>
  );
};
export default App;
