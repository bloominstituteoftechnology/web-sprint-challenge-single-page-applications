import React from "react";
import { Route } from "react-router-dom";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Route path="/Form.js" component={Form} />
      <p>You can remove this code and create your own header</p>
    </div>
  );
};
export default App;
