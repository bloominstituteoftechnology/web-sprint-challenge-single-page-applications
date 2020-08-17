import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Components/Form";
// import Confirmation from "./Components/Confirmation";

const App = () => {
  return (
    <div>
      <h1>
        <Link to="/App">Lambda Eats</Link>
      </h1>
      <h3>
        <Link to="/Form">Pizza</Link>
      </h3>
      <Switch>
        <Route path="/Form" component={Form} />
        <Route path="/App" />
      </Switch>
      {/* <Confirmation /> */}
      {/* <button>
        <Link to="/Form">Get ya pizza!</Link>
      </button> */}
    </div>
  );
};
export default App;
