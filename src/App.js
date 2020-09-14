import React from "react";
import Form from "./Form"
import Home from "./Home"
import { Link, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <nav style={{display: "flex", flexFlow: "row"}}>
      <h4 className="store-header" style={{marginTop: "3%", marginLeft: "5%", fontFamily: "'Pacifico', cursive"}}>Crackin The Code Pizza</h4>
      <div className="nav-links" style={{marginLeft: "63.5%", marginTop: "3%", fontFamily: "'Pacifico', cursive", color: "black"}}>
        <Link to ="/" style={{textDecoration: "none", fontSize: "1.5rem", color: "black"}}>Home</Link>
        <Link to="/form" style={{textDecoration: "none", fontSize: "1.5rem", color: "#e63946" }}>Order Now</Link>
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
