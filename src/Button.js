import React from "react";
import "./App.css";
import { useHistory } from 'react-router-dom';



const Button = () => {


  const history = useHistory();

  return (
  
  
  // <Route path='/Form'>
    <button className="button" onClick={(evt) => history.push(`/pizza`)} >
      Order Pizza
    </button>

  // </Route>


    

   
  );
};
export default Button;