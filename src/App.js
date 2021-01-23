import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./Header.js";
import Button from "./Button";
import Form from "./Form.js";

const App = () => {
  return (
    <>


  


        <Switch>
            <Route path='/Form'>
              <Form />
            </Route>
       
            <Route path={'/'}>
            <h1>Lambda Eats</h1>
      <button>Home</button>
      <button>Help</button>
      <Header />


      <Button/>
            </Route>
      </Switch>


     

    </>
  );
};
export default App;


/*
- [ ] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable)
- [ ] A form with a "/pizza" route
- [ ] A name text input field
- [ ] Validation for name - name must be at least 2 characters
- [ ] A dropdown for pizza size
- [ ] A checklist for toppings - at least 4 (hint: name each separately!)
- [ ] Text input for special instructions
- [ ] An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions
*/
