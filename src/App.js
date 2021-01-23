import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Button from "./Button";
import Form from "./Form.js";

const App = () => {
  return (
    <>
  

  


        <Switch>
            <Route path='/pizza'>
              <Form />
            </Route>
       
            <Route path={'/'}>
              <button class="button">Home</button>
              <button class="button">Help</button>

              <div className="App-header">
                <h1 >Lambda Eats</h1>
                <Button />
              </div>

            <Header />
            <div class="home-banner">
            {/* <img src="../pizza-home.jpg"/> */}
            </div>
      

            </Route>
        </Switch>


     

    </>
  );
};
export default App;
