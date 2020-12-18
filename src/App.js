import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch} from "react-router-dom";
import BuildForm from "./form";
import schema from "./formSchema";

const App = () => {
  const initialFormValues ={
    size: "",
    sauce: "",
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    bacon: false,
    tomatoes: false,
    onions: false,
    mushrooms: false,
    jalepenos: false,
    bananaPeppers: false,
  }

  const [buildForm, setBuildForm] = useState([]);





  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Because Beta is never an option!</p>
      <Switch>
        <Route exact path={"/pizza"}>
          <button>BUILD YOUR OWN</button>
        </Route> 
        <Route path="/">
          <BuildForm buildForm={BuildForm} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
