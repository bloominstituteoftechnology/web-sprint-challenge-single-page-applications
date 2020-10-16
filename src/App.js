import React, {useState} from "react";
import Form from "./FormPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

const initialFormValues = {
  ///// TEXT INPUTS /////
  size: "",
  sauce: "",
  ///// DROPDOWN /////
  toppings: "",
};
const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
   
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };
  
  const submitForm = () => {

  };
  return (
    <>
      <Router>
        <Route path="/" component="HomePage" exact>
          <HomePage />
        </Route>
        <Route path="/form" component="Form">
          <Form values={formValues}
          update={updateForm}
          submit={submitForm}
          />
        </Route>
      </Router>
    </>
  );
};
export default App;
