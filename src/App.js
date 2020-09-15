import React from "react";
import Home from "./Home"
import Pizza from "./Pizza"
import Confirmation from "./Confirmation"
import { Route, Link } from "react-router-dom"

const App = () => {
  return (
    <div className="App" style={{backgroundImage: "url(https://i.pinimg.com/originals/4e/d3/cc/4ed3ccdc743bc7cafc7463c56bc51bed.jpg)", height: "655px"}}>
      

      <nav 
      style={{backgroundColor: "#fcbf49", display: "flex", flexFlow: "row"}}>
        <h1 className="sitename" 
        style={{marginLeft: "15%", marginTop: "1%", color: "#d62828", textShadow: "2px 2px black"}}>
        Lambda Eats
        </h1>

        <div className="nav-links" style={{marginLeft: "39%", marginTop: "2%"}}>
          <Link to="/" 
          style={{border: "2px groove black", fontSize: "1.5rem", textDecoration: "none",color: "#d62828", textShadow: "1px 1px black", backgroundColor: "#e9c46a"}}>Home</Link>

          <Link to="/Pizza" 
          style={{border: "2px groove black", fontSize: "1.5rem", textDecoration: "none", color: "#d62828", textShadow: "1px 1px black", backgroundColor: "#e9c46a"}}>Order Now</Link>
        </div>
      </nav>





      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Pizza">
        <Pizza />
      </Route>

      <Route path="/Confirmation">
        <Confirmation />
      </Route>
      
    </div>
  );
};
export default App;
