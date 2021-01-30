import React from "react";
import PizzaForm from "./components/PizzaForm.js";
import Home from "./components/Home.js";
import { Route, Switch, Link } from "react-router-dom";
import { Button } from "reactstrap";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link to="/form">
          {" "}
          <Button>Order pizza here</Button>{" "}
        </Link>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="form" render={() => <PizzaForm />} />  */}
        <Route path="/form" component={PizzaForm} />
      </Switch>
    </>
  );
};
export default App;
