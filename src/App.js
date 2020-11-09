import React from "react";
import { Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import FormZa from "./Components/FormZa";

const App = () => {
  return (
    <div className="appPage">
      <header>
        <h1>Lambda Eats</h1>
        <Link to={"/"}>
          <button className="homeButton">Home</button>
        </Link>
      </header>
      <Route exact path="/" component={Homepage} />
      <Route path="/pizza" component={FormZa} />
      <footer>
        <p>Coded by Amanda Nelson</p>
        <p>2020</p>
      </footer>
    </div>
  );
};
export default App;
