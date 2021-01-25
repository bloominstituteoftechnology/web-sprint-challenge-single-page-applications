import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./Homepage";
import Pizza from "./Pizza";

const App = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => {
          return <Homepage />;
        }}
      />
      <Route
        path="/pizza"
        render={() => {
          return <Pizza />;
        }}
      />
    </>
  );
};

export default App;
