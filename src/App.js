import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Components/Form";

const App = () => {
  return (
    <div>
      <h1>
        <Link to="/Form">Lambda Eats</Link>
      </h1>
      <Switch>
        <Route path="/Form" component={Form} />
      </Switch>
      {/* <button>
        <Link to="/Form">Get ya pizza!</Link>
      </button> */}
    </div>
  );
};
export default App;
