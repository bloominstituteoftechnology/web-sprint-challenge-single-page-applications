import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h2>Lambda Eats</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
      </div>
    </nav>
  );
}

export default Nav;
