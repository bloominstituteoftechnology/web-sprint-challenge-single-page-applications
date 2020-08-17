import React from "react";
import { Route, Link } from "react-router-dom";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <h1>
        <Link to="/App">Lambda Eats</Link>
      </h1>
      <Route path="/Form" component={Form} />
      <button>
        <Link to="/Form">Get ya pizza!</Link>
      </button>
    </div>
  );
};
export default App;
