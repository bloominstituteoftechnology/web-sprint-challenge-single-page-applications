import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Error from "./Error.js";
import Button from "./Button";
import Form from "./Form.js";
import Help from "./Help.js";
import Order from "./Order.js";

const App = () => {
  const [pizza, setPizza] = useState({}); // empty object pizza


  return (
    <>

        <Switch>
            <Route exact path='/pizza'>
              <Form setPizza={setPizza}/>
            </Route>

            <Route exact path='/pizza/order'>
              <Header/>
              <Order pizza={pizza}/>
            </Route>

             <Route exact path={'/help'}>
              <Header/>
              <Help/>
            </Route>

            <Route exact path={'/error'}>
              <Header/>
              <Error/>
            </Route> 
       
            <Route exact path={'/'}>
              <Header/>

              <div className="App-header">
                <h1 >Lambda Eats</h1>
                <Button />
              </div>

      

            </Route>
        </Switch>


     

    </>
  );
};
export default App;
