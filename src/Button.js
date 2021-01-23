import React from "react";
import "./App.css";
import Form from './Form';
import { Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';



const Button = () => {


  const history = useHistory();

  return (
  
  
  // <Route path='/Form'>
    <button onClick={(evt) => history.push(`/Form`)} >
      Order Pizza
    </button>

  // </Route>


    

   
  );
};
export default Button;