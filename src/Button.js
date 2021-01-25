import React from "react";
import "./App.css";
import { useHistory } from 'react-router-dom';



const Button = () => {

  const history = useHistory();

  return (
  
    <button className="button" onClick={(evt) => history.push(`/pizza`)} >
      Order Pizza
    </button>
  
  );

};

export default Button;