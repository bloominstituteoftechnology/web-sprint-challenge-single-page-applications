import React from "react";
import Form from "./Form"
import Home from "./Home"
import { Link, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="the-body" style={{backgroundImage: "url(https://previews.123rf.com/images/balabolka/balabolka1611/balabolka161100344/66814392-cartoon-cute-hand-drawn-pizza-seamless-pattern-colorful-with-lots-of-objects-background-endless-funn.jpg)"}}>
      <h4 style={{marginLeft: "5%", fontFamily: "'Pacifico', cursive", float:"left", marginTop: "3%", color: "black" }}>Crackin The Code Pizza</h4>
    <nav style={{backgroundColor: "#e63946", height: "100px"}}>
      <div className="nav-links" style={{ fontFamily: "'Pacifico', cursive", color: "black", float: "right", marginRight: "5%"}}>
        <Link to ="/" style={{textDecoration: "none", fontSize: "1.5rem", color: "black", backgroundColor: "#ffbe0b", border: "1px solid black"}}>Home</Link>
        <Link to="/form" style={{textDecoration: "none", fontSize: "1.5rem", color: "black", backgroundColor: "#ffbe0b", border: "1px solid black"}}>Order Now</Link>
      </div>
    </nav>

    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/Form">
      <Form />
    </Route>
      
    </div>
  );
};
export default App;
