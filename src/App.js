import React from "react";
import Form from "./Form"
import Home from "./Home"
import { Link, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <nav style={{display: "flex", flexFlow: "row"}}>
      <h1 className="store-header" style={{marginTop: "3%"}}>Crackin The Code Pizza</h1>
      <div className="nav-links" style={{marginLeft: "45%", marginTop: "3%"}}>
        <Link to ="/" style={{textDecoration: "none", fontSize: "1.5rem"}}>Home</Link>
        <Link to="/form" style={{textDecoration: "none", fontSize: "1.5rem" }}>Order Now</Link>
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
